"use client";
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Server, Zap, Shield, Users, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"
import { PingWorker } from "@/components/ui/ping-worker"

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
              <Button onClick={() => {
                    const el = document.getElementById("installation");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Terminal className="w-4 h-4 mr-2" />
                Quick Start
              </Button>
              
              <PingWorker />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      {/* Quick Start Guide */}
      <section id="installation" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Start Guide</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-orange-500 text-white">1</Badge>
                  Deploy with Docker
                </CardTitle>
                <CardDescription>Get JudgeLib running in minutes with Docker</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                  <pre className="text-green-400">
                    {`# Pull the latest JudgeLib image
docker pull judgelib/microservice:latest

# Run with basic configuration
docker run -d \\
  --name judgelib \\
  -p 3000:3000 \\
  -e REDIS_URL=redis://localhost:6379 \\
  -e MAX_WORKERS=4 \\
  judgelib/microservice:latest`}
                  </pre>
                </div>
              </CardContent>
            </Card> */}

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-orange-500 text-white">1</Badge>
                  Execute Code via API
                </CardTitle>
                <CardDescription>Send code execution requests to the REST API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">POST /api/execute</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-green-400">
                      {`curl -X POST http://<your-api-endpoint>/run \\
  -F "file=./code.cpp" \\
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
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                    <pre className="text-blue-400">
                      {`{
    "message": "All workers completed",
    "jobId": "hill",
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Supported Languages</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Python", version: "3.11", extension: ".py" },
              { name: "Java", version: "17", extension: ".java" },
              { name: "C++", version: "GCC 11", extension: ".cpp" },
            ].map((lang) => (
              <Card key={lang.name} className="border-l-4 border-l-orange-500">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{lang.name}</h3>
                      <p className="text-sm text-gray-600">{lang.version}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{lang.extension}</Badge>
                      <div className="mt-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
