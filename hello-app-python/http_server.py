import http.server
import socketserver
import os
from urllib.parse import urlparse
from urllib.parse import parse_qs

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):

        self.send_response(200)

        self.send_header("Content-type", "text/html")

        self.end_headers()

        hostname = os.environ['HOSTNAME']
        worker = os.environ['K8S_NODE_NAME']
        text = f"K8s Node: {worker} - Hostname: {hostname}\n"

        self.wfile.write(bytes(text, "utf8"))

        return

# Create an object of the above class
handler_object = MyHttpRequestHandler

PORT = int(os.environ['HTTP_APP_PORT'])
#PORT = 8080
my_server = socketserver.TCPServer(("", PORT), handler_object)

# Star the server
my_server.serve_forever()
