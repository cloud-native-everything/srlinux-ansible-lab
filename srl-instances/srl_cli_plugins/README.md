# Installation

Assuming you have built leaf-spine topology with containerlab in advance.
Where both have stablished bgp sessions.
Otherwise, stop here.

You need 3 files: 
```
gnmi_lite.py  gnmi_pb2.py  health.py
```

Get into the srl box as linux administrator and copy gnmi_lite.py and  health.py to plugins folder.

```
sudo cp health.py /opt/srlinux/python/virtual-env/lib/python3.6/site-packages/srlinux/mgmt/cli/plugins/reports
sudo cp gnmi_lite.py /opt/srlinux/python/virtual-env/lib/python3.6/site-packages/srlinux/mgmt/cli/plugins/reports
```

Leave gnmi_pb2.py in the home directory /home/linuxadmin
Then add health in the plugin list at entry_point.txt (UNCOMMENTED)

```
[linuxadmin@leaf1 ~]$ tail /opt/srlinux/python/virtual-env/lib/python3.6/site-packages/srlinux-0.1-py3.6.egg-info/entry_points.txt
tools = srlinux.mgmt.cli.plugins.tools:Plugin
tools_mode = srlinux.mgmt.cli.plugins.tools_mode:Plugin
traceroute = srlinux.mgmt.cli.plugins.traceroute:Plugin
traffic_monitor = srlinux.mgmt.cli.plugins.traffic_monitor:Plugin
tree = srlinux.mgmt.cli.plugins.tree:Plugin
tunnel_interface_reports = srlinux.mgmt.cli.plugins.reports.tunnel_interface_reports:Plugin
tunnel_vxlan_reports = srlinux.mgmt.cli.plugins.reports.tunnel_vxlan_reports:Plugin
version = srlinux.mgmt.cli.plugins.reports.version:Plugin
watch = srlinux.mgmt.cli.plugins.watch:Plugin
#health = srlinux.mgmt.cli.plugins.reports.health:Plugin
```

## Addtional settings

Add your network-instance and bgp neighbor for the uplink in the health.py parameters
```
[root@baremetal srl_cli_plugins]# head -12 health.py
from srlinux.data import ColumnFormatter, TagValueFormatter, Border, Data, Borders
from srlinux.mgmt.cli import CliPlugin
from srlinux.schema import FixedSchemaRoot
from srlinux.syntax import Syntax
from srlinux.location import build_path
from srlinux.mgmt.cli.plugins.reports.gnmi_lite import GNMIHandlerLite



uplink_network_instance = "default"
uplink_peer_list = ['10.1.1.0']
```

And finally add description for bgp neighbor as "uplink1"

```
A:leaf1# info network-instance default protocols bgp neighbor 10.1.1.0
    network-instance default {
        protocols {
            bgp {
                neighbor 10.1.1.0 {
                    admin-state enable
                    description uplink1
                    peer-group spines
                }
            }
        }
    }
--{ + running }--[  ]--
```

And you done!

## Testing

```
A:leaf1# show health local detail
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Status: Summary of device heatlh
----------------------------------------------------------------------------------------------------------------------------------------------------------------
+---------+-------+------+------+
| Uplinks | Power | Fans | TCAM |
+=========+=======+======+======+
| OK      | OK    | OK   | OK   |
+---------+-------+------+------+
----------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Status: Detailed status
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Description            : uplink1
Admin State            : enable
Session State          : established
Established Transitions: 3
--{ + candidate shared default }--[  ]--
```



