import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Terminal, Package } from "lucide-react"
import Link from "next/link"
import { FloatingNav } from "@/components/ui/floating-navbar"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guides and API references for integrating JudgeLib into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#getting-started">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  <Code className="w-4 h-4 mr-2" />
                  Getting Started
                </Button>
              </Link>
              <Link href="#api-reference">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3"
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  API Reference
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Navigation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/microservice">
              <Card className="hover:border-orange-200 transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <Terminal className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Microservice Guide</CardTitle>
                  <CardDescription>Deploy as a standalone service</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/npm">
              <Card className="hover:border-orange-200 transition-colors cursor-pointer">
                <CardHeader className="text-center">
                  <Package className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle>NPM Library Guide</CardTitle>
                  <CardDescription>Install directly in Node.js</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Card className="hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <Code className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Complete API documentation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What is JudgeLib?</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  libJudge is a lightweight code execution engine built with Node.js and the `child_process` module. It
                  enables you to execute user-submitted code in a controlled environment for educational, testing, or
                  evaluation purposes.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Note:</strong> While it isolates processes, it{" "}
                        <strong>does not run inside a secure container</strong> (like Docker). For production-grade
                        isolation, containerization is recommended.
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Execute code in multiple languages (like Python, C++, Java)</li>
                  <li>Customizable timeouts and memory limits</li>
                  <li>Queue-based execution support (optional via Redis)</li>
                  <li>Real-time output streaming</li>
                  <li>Supports both NPM module usage and HTTP-based microservice mode</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">API Reference</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Execution Parameters</CardTitle>
                <CardDescription>Parameters for code execution requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Parameter</th>
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-mono text-orange-600">language</td>
                        <td className="py-2">string</td>
                        <td className="py-2">✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono text-orange-600">code</td>
                        <td className="py-2">string</td>
                        <td className="py-2">✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono text-orange-600">input</td>
                        <td className="py-2">string</td>
                        <td className="py-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono text-orange-600">timeout</td>
                        <td className="py-2">number (ms)</td>
                        <td className="py-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Format</CardTitle>
                <CardDescription>Structure of execution results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Supported Languages</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "C++",
              "Java",
            ].map((language) => (
              <div
                key={language}
                className="text-center p-4 border rounded-lg hover:border-orange-200 transition-colors"
              >
                <Badge variant="secondary" className="w-full">
                  {language}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Code Examples</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic C++ Execution with File Path</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                  <pre className="text-blue-400">
                    {`import fs from 'fs';
import path from 'path';
import { judge } from 'lib-judge';

// C++ code for summing array elements
const code = \`
#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> v(n);
    for(int i = 0;i<n;i++){
        cin>>v[i];
    }
    int c = 0;
    for(auto it:v){
        c+=it;
    }
    cout<<c;
    return 0;
}\`;

// Save to a temporary file
const tmpDir = './tmp';
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
const tmpPath = path.join(tmpDir, \`code_\${Date.now()}.cpp\`);
fs.writeFileSync(tmpPath, code, 'utf-8');

// Execute with judge
const result = await judge({
  codePath: tmpPath,        // path of the file
  ques_name: 'sum of array',
  input: '5 1 2 3 4 5 ### 3 1 2 3 ### 2 1 2',
  output: '15 ### 6 ### 3',
  timeout: '2',
  sizeout: '64',
});

console.log(result);`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Microservice API Call</CardTitle>
              </CardHeader>
              <CardContent>
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
