import { FloatingNav } from "@/components/ui/floating-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Server, Zap, Shield, Users, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { PingWorker } from "@/components/ui/ping-worker"
import Image from "next/image"

export default function MicroservicePage() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Microservice Setup</h1>
            <p className="text-xl text-gray-600 mb-8">
              Deploy JudgeLib as a standalone microservice with REST API endpoints for maximum scalability and
              flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Terminal className="w-4 h-4 mr-2" />
                Quick Start
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                API Reference
              </Button>
              <PingWorker />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Demo</h2>
            <p className="text-lg text-gray-600">Try our hosted microservice instance</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-white">DEMO</Badge>
                Production Microservice
              </CardTitle>
              <CardDescription>
                Test the JudgeLib microservice at:
                <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">https://judge-microser.onrender.com/</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> The demo service may experience occasional downtime or restarts as it runs
                      on a free tier. If you encounter a 502 error, please try again in a few minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Response</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                     <pre className="text-blue-400">
                      {`{
  "message": "All workers completed",
  "jobId": "sum of number",
  "results": [
    {
      "input": "5 1 2 3 4 5",
      "expected_output": "15",
      "result": "15",
      "correct": true,
      "timeout": "2"
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Request</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-green-400">
                      {`curl -X POST http://<your-api-endpoint>/run \\
                      -F "code=./code.cpp" \\
                      -F "ques_name= sum of number" \\
                      -F "timeout=2" \\
                      -F "sizeout=1" \\
                      -F "input=5 1 2 3 4 5 ### 3 1 2 3 ### 2 1 4..." // each input are seperated by ### \\
                      -F "output=15 ### 6 ### 5 .." // each output are seperated by ### \\
                      -F "language=cpp"
                    '`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Microservice?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Language Agnostic</h3>
              <p className="text-gray-600">
                Use JudgeLib from any programming language or framework via simple HTTP requests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Horizontal Scaling</h3>
              <p className="text-gray-600">
                Scale your code execution capacity by deploying multiple instances behind a load balancer.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Isolated Environment</h3>
              <p className="text-gray-600">
                Run code execution in a completely isolated environment, separate from your main application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">API Documentation</h2>

          <div className="space-y-8">
            {/* Endpoint Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-orange-500 text-white">POST</Badge>
                  /api/c/run
                </CardTitle>
                <CardDescription>Execute code using the JudgeLib microservice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Base URL</h4>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
                    https://judge-microser.onrender.com/
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-blue-400">
                      {`{
  "language": "python",     // required: programming language
  "code": "print('Hello')", // required: source code to execute
  "input": "dummy_input",   // required: input for the program (cannot be empty)
  "timeout": 5000           // optional: timeout in milliseconds
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>Different ways to interact with the microservice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">cURL Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-green-400">
                      {`curl -X POST https://judge-microser.onrender.com/api/c/run \\
  -F "code=@code.cpp" \\
  -F "ques_name=sum of number" \\
  -F "timeout=2" \\
  -F "sizeout=1" \\
  -F "input=5 1 2 3 4 5" \\
  -F "output=15" \\
  -F "language=cpp"'`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">JavaScript/Node.js Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-blue-400">
                      {`const response = await fetch('https://judge-microser.onrender.com/api/c/run', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    language: 'python',
    code: 'print("Hello from JudgeLib!")',
    input: 'dummy_input',  // Required - cannot be empty
    timeout: 5000
  })
});

const result = await response.json();
console.log(result);`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Python Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-yellow-400">
                      {`import requests

url = "https://judge-microser.onrender.com/api/c/run"
payload = {
    "language": "python",
    "code": "print('Hello from Python!')",
    "input": "dummy_input",  # Required - cannot be empty
    "timeout": 5000
}

response = requests.post(url, json=payload)
print(response.json())`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Judge<span className="text-orange-500">Lib</span>
              </h3>
              <p className="text-gray-400 text-sm">The most reliable code execution engine for developers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/microservice" className="hover:text-orange-500 transition-colors">
                    Microservice
                  </Link>
                </li>
                <li>
                  <Link href="/npm" className="hover:text-orange-500 transition-colors">
                    NPM Library
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-orange-500 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-orange-500 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    SDKs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} JudgeLib. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
