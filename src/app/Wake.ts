import * as http from "http";

class Wake {
    constructor()
    {
        // httpサーバーの設定をします。
        const server: http.Server = http.createServer(
            (
                request: http.IncomingMessage,
                response: http.ServerResponse
            ) => this.requestHandler(request, response)
        );

        // サーバーを起動します。
        server.listen(3000);
    }

    private requestHandler(request: http.IncomingMessage, response: http.ServerResponse): void
    {
        if (request.method == 'POST') {
            var data = "";
            request.on('data', function (chunk) {
                data += chunk;
            });
            request.on('end', function () {
                if (!data) {
                    console.log("No post data");
                    response.end();
                    return;
                }
                var dataObject = querystring.parse(data);
                console.log("post:" + dataObject.type);
                if (dataObject.type == "wake") {
                    console.log("Woke up in post");
                    response.end();
                    return;
                }
                response.end();
            });
        } else if (request.method == 'GET') {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.end('Discord Bot is active now\n');
        }
    }
}

module.exports = Wake
