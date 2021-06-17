from srlinux.data import ColumnFormatter, TagValueFormatter, Border, Data, Borders
from srlinux.mgmt.cli import CliPlugin
from srlinux.schema import FixedSchemaRoot
from srlinux.syntax import Syntax
from srlinux.location import build_path
from srlinux.mgmt.cli.plugins.reports.gnmi_lite import GNMIHandlerLite



uplink_network_instance = "default"
uplink_peer_list = ['10.1.1.0']


class Plugin(CliPlugin):
    
    def load(self, cli, **_kwargs):
        health = cli.show_mode.add_command(Syntax('health', help='Show health of this node'))
        local = health.add_command(Syntax('local', help='shows local device health status'), update_location=False, callback=self._show_local, schema=self._get_local_schema())
        detail = local.add_command(Syntax('detail', help='shows detailed local device health status'), update_location=False, callback=self._show_local_detail, schema=self._get_schema())
        pod =  health.add_command(Syntax('pod', help='shows health status of the pod'), update_location=False, callback=self._show_pod, schema=self._get_schema())
        detail = pod.add_command(Syntax('detail', help='shows detailed pod health status'), update_location=False, callback=self._show_pod, schema=self._get_schema())

    def _show_local(self, state, output, **_kwargs):
        


        header = f'Summary of device heatlh'
        result_header = self._populate_header(header)
        self._set_formatters_header(result_header)
        output.print_data(result_header)

        for uplink in uplink_peer_list:
            server_data = self._fetch_state(state, uplink)
            result_local = self._populate_local(server_data)
            uplink_status = self._uplink_health_check(result_local)
            if uplink_status == "!!NOK!!":
                break       
        result_local.uplink.create().uplinks = uplink_status
        self._set_local_health_formatter(result_local)
        output.print_data(result_local)
                
    def _show_local_detail(self, state, output, **_kwargs):
        
        header = f'Detailed status'
        result_header = self._populate_header(header)
        self._set_formatters_header(result_header)
        output.print_data(result_header)

        for uplink in uplink_peer_list:
            server_data = self._fetch_state(state, uplink)
            result = self._populate_data(server_data)
            self._set_formatters_uplinks(result)
            output.print_data(result)

        #server_data = self._fetch_state2(state)
        #result2 = self._populate_data2(server_data)
        #self._set_formatters2(result2)
        #output.print_data(result2)

    def _get_local_schema(self):
        root = FixedSchemaRoot()
        root.add_child(
            'uplink',
            fields=['Uplinks', 'Power', 'Fans', 'TCAM']
        )
        return root

    def _uplink_health_check(self, result_local):
        if result_local.uplink.get().uplinks != "established":
            status = "!!NOK!!"
            return status
        else: 
            status = "OK"
            return status

    def _get_header_schema(self):
        root = FixedSchemaRoot()
        root.add_child(
            'header',
            fields=['Status']
        )
        return root

    def _show_pod(self, state, output, **_kwargs):
        
        server_data = self._fetch_pod_state('1.1.1.1')
        result = self._populate_remote_uplink_data(server_data)
        self._set_formatters_remote_uplinks(result)
        output.print_data(result)

    def _get_schema(self):
        root = FixedSchemaRoot()
        uplink_header = root.add_child(
            'uplink_header',
            fields=['uplinks']
        )
        uplink_header.add_child(
            'uplink_child',
            fields=['Description', 'Admin State', 'Session State', 'Established Transitions']
        )
        power_header = root.add_child(
            'power_header',
            fields=['power consumption']
        )
        power_header.add_child(
            'power_child',
            fields=['Capacity','Allocated', 'Used', 'Peak']
        )
        pod_uplink = root.add_child(
            'remote_uplink',
            fields=['Description', 'Admin State', 'Session State', 'Established Transitions']
        )
        return root

    def _fetch_state(self, state, uplink):
        admin_state_path = build_path(f'/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/admin-state')
        session_state_path = build_path(f'/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/session-state')
        established_transitions_path = build_path(f'/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/established-transitions')
        description_path = build_path(f'/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/description')
        self.admin_state_data = state.server_data_store.get_data(admin_state_path, recursive=True)
        self.session_state_data = state.server_data_store.get_data(session_state_path, recursive=True)
        self.established_transitions_data = state.server_data_store.get_data(established_transitions_path, recursive=True)
        self.description_data = state.server_data_store.get_data(description_path, recursive=True)

    def _fetch_state2(self, state):
        capacity_state_path = build_path(f'/platform/chassis/power/total/capacity')
        #allocated_state_path = build_path(f'/platform/chassis/power/total/allocated')
        used_state_path = build_path(f'/platform/chassis/power/total/used')
        peak_state_path = build_path(f'/platform/chassis/power/total/peak')
        self.capacity_state_data = state.server_data_store.get_data(capacity_state_path, recursive=True)
        #self.allocated_state_data = state.server_data_store.get_data(allocated_state_path, recursive=True)
        self.used_state_data = state.server_data_store.get_data(used_state_path, recursive=True)
        self.peak_state_data = state.server_data_store.get_data(peak_state_path, recursive=True)
        
    def _fetch_pod_state(self, uplink):
        remote_admin_state_response = self._retrieve_pod_data(f"/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/admin-state")
        #remote_session_state_response = self._retrieve_pod_data(f"/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/session-state")
        #print(remote_session_state_response)
        #remote_established_transitions_response = self._retrieve_pod_data(f"/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/established-transitions")
        #remote_description_response = self._retrieve_pod_data(f"/network-instance[name={uplink_network_instance}]/protocols/bgp/neighbor[peer-address={uplink}]/description")
        self.remote_admin_state_data =  str(remote_admin_state_response.notification[0].update[0].val.json_ietf_val.decode("UTF-8")).replace('{','').replace('"','').replace('}','')
        #self.remote_session_state_data =  str(remote_session_state_response.notification[0].update[0].val.json_ietf_val.decode("UTF-8")).replace('{','').replace('"','').replace('}','')
        #self.remote_established_transitions_data =  str(remote_established_transitions_response.notification[0].update[0].val.json_ietf_val.decode("UTF-8")).replace('{','').replace('"','').replace('}','')
        #self.remote_description_data =  str(remote_description_response.notification[0].update[0].val.json_ietf_val.decode("UTF-8")).replace('{','').replace('"','').replace('}','')
    
    def _populate_header(self, header):
        result_header = Data(self._get_header_schema())
        data = result_header.header.create()
        data.status = header
        return result_header

    def _populate_local(self, server_data):

        power_status = "OK"
        fan_status = "OK"
        tcam_status = "OK"

        result = Data(self._get_local_schema())
        data = result.uplink.create()
        data.uplinks = self.session_state_data.network_instance.get().protocols.get().bgp.get().neighbor.get().session_state or '<Unknown>'
        data.power = power_status
        data.fans = fan_status
        data.tcam = tcam_status
        return result 

    def _populate_data(self, server_data):
        result = Data(self._get_schema())
        data = result.uplink_header.create()
        data_child = data.uplink_child.create()
        data_child.admin_state = self.admin_state_data.network_instance.get().protocols.get().bgp.get().neighbor.get().admin_state or '<Unknown>'
        data_child.session_state = self.session_state_data.network_instance.get().protocols.get().bgp.get().neighbor.get().session_state or '<Unknown>'
        data_child.established_transitions = self.established_transitions_data.network_instance.get().protocols.get().bgp.get().neighbor.get().established_transitions or '<Unknown>'
        data_child.description = self.description_data.network_instance.get().protocols.get().bgp.get().neighbor.get().description or '<Unknown>'
        return result

    def _populate_data2(self, server_data):
        result2 = Data(self._get_schema())
        data2 = result2.power_header.create()
        data2_child = data2.power_child.create()
        data2_child.capacity = self.capacity_state_data.platform.get().chassis.get().power.get().total.get().capacity or '<unknown>'
        #data2_child.allocated = self.allocated_state_data.platform.get().chassis.get().power.get().total.get().allocated or '<unknown>'
        data2_child.used = self.used_state_data.platform.get().chassis.get().power.get().total.get().used or '<unknown>'
        data2_child.peak = self.peak_state_data.platform.get().chassis.get().power.get().total.get().peak or '<unknown>'
        return result2

    def _populate_remote_uplink_data(self, server_data):
        result = Data(self._get_schema())
        data = result.remote_uplink.create()
        data.admin_state = self.remote_admin_state_data or '<Unknown>'
        #data.session_state = self.remote_sessions_state_data or '<unknown>'
        #data.established_transitions = self.remote_established_transitions_data or '<unknown>'
        #data.description = self.description_data or '<unknown>'
        return result

    def _set_formatters_header(self, data):
        data.set_formatter('/header',Border(TagValueFormatter(), Border.Above))

    def _set_formatters_uplinks(self, data):
        data.set_formatter('/uplink_header/uplink_child', Border(TagValueFormatter(), Border.Above))

    def _set_formatters_remote_uplinks(self, data):
        data.set_formatter('/remote_uplink', Border(TagValueFormatter(), Border.Above))
    
    def _set_formatters2(self, data):
        data.set_formatter('/power_header/power_child', Border(ColumnFormatter(), Border.Above | Border.Below))

    def _set_local_health_formatter(self, data):
        data.set_formatter('/uplink', Border(ColumnFormatter(), Border.Above | Border.Below))

    def _retrieve_pod_data(self, xpath):
        subscriber = GNMIHandlerLite.setup_connection()
        response = subscriber.get(xpath)
        return response
