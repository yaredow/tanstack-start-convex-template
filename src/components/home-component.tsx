import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Database,
  Rocket,
  Code,
  Users,
  GitBranch,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function HomeComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl">FullStack Template</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="#features"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              to="#stack"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              to="#getting-started"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <GitBranch className="w-4 h-4 mr-2" />
            Clone Template
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2" />
              Production Ready Template
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            TanStack Start +<br />
            Convex + Better Auth
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            The ultimate full-stack template combining the power of TanStack
            Start's type-safe routing, Convex's real-time backend, and Better
            Auth's secure authentication system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-2"
            >
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="stack"
        className="py-20 px-4 bg-white/50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powered by Modern Technologies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built with the latest and greatest tools for maximum developer
              experience and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-200 transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">TanStack Start</CardTitle>
                <CardDescription className="text-base">
                  Full-stack React framework with type-safe routing and server
                  functions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Type-safe routing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Server-side rendering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    File-based routing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Built-in data fetching
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Convex</CardTitle>
                <CardDescription className="text-base">
                  Real-time backend with automatic scaling and type safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time subscriptions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automatic scaling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Type-safe queries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Built-in caching
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Better Auth</CardTitle>
                <CardDescription className="text-base">
                  Modern authentication with multiple providers and security
                  features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multiple auth providers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Session management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Role-based access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Security best practices
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Build Fast
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Skip the setup and configuration. Start building your application
              immediately with our pre-configured template.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Lightning Fast Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Hot reload, type safety, and optimized build process for rapid
                  development cycles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Real-time by Default
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Built-in real-time subscriptions and automatic data
                  synchronization across clients.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure Authentication
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Pre-configured authentication with social providers,
                  email/password, and magic links.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Type-Safe Everything
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  End-to-end type safety from database to UI with automatic type
                  generation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Team Collaboration
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Built-in user management, roles, and permissions for
                  team-based applications.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Optimized for production with automatic scaling, monitoring,
                  and error handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section
        id="getting-started"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Clone the template and have your full-stack application running in
            minutes, not hours.
          </p>

          <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <code className="text-green-400 text-lg font-mono">
              git clone
              https://github.com/your-username/tanstack-convex-auth-template.git
            </code>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              Clone Template
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-2"
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-950/80 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">FullStack Template</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-300">
              <Link to="#" className="hover:text-blue-600 transition-colors">
                Documentation
              </Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">
                Examples
              </Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">
                GitHub
              </Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2024 FullStack Template. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
