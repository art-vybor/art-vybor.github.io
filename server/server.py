from BaseHTTPServer import BaseHTTPRequestHandler
import cgi
import pybel

MOLECULE_TYPE = {'smi', 'mol'}    

class PostHandler(BaseHTTPRequestHandler):
    
    def do_POST(self):
        # Parse the form data posted
        form = cgi.FieldStorage(
            fp=self.rfile, 
            headers=self.headers,
            environ={'REQUEST_METHOD':'POST',
                     'CONTENT_TYPE':self.headers['Content-Type'],
                     })

        # Begin the response
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*");
        self.send_header("Access-Control-Allow-Credentials", "true ");
        self.send_header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
        self.end_headers()
        
        
        moleculeType = None
        moleculeData = None

        for field in form.keys():
            field_item = form[field]            
            if field == 'type': moleculeType = field_item.value
            if field == 'data': moleculeData = field_item.value

        if moleculeType in MOLECULE_TYPE:
            self.wfile.write('\t%s\n' % convertToPdb(moleculeData, moleculeType))
            print('ok')
        else:
            self.wfile.write('ERROR: Incorrect type')

        return

def convertToPdb(moleculeData, moleculeType):
    mol = pybel.readstring(moleculeType, moleculeData)
    mol.make3D()
    return mol.write("pdb")

if __name__ == '__main__':
    from BaseHTTPServer import HTTPServer
    server = HTTPServer(('', 8080), PostHandler)
    print 'Starting server, use <Ctrl-C> to stop'
    server.serve_forever()