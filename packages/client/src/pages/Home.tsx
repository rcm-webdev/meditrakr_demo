import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import {
   ArrowRight,
   Scan,
   BarChart3,
   Shield,
   Zap,
   Eye,
   Database,
} from 'lucide-react';

export default function HomePage() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
         {/* Header */}
         <header className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center space-x-2">
                  <Scan className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">MediTrakr</span>
               </div>
               <Link to="/dashboard">
                  <Button>
                     Get Started
                     <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
               </Link>
            </div>
         </header>

         {/* Hero Section */}
         <section className="container mx-auto px-4 py-20 text-center">
            <div className="max-w-4xl mx-auto">
               <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Track every scan.
               </h1>
               <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Simulate, log, and visualize tag events with powerful
                  analytics and real-time monitoring.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/dashboard">
                     <Button size="lg" className="text-lg px-8 py-6">
                        Open Dashboard
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </Button>
                  </Link>
                  <Link to="/playground">
                     <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 py-6"
                     >
                        Try API Playground
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything you need to track tags
               </h2>
               <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From CRUD operations to advanced analytics, TagTrackr provides
                  a complete solution for tag management.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tag Management</h3>
                  <p className="text-muted-foreground">
                     Create, update, and delete NFC, RFID, and Barcode tags with
                     full CRUD operations and validation.
                  </p>
               </div>

               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                     Event Simulation
                  </h3>
                  <p className="text-muted-foreground">
                     Simulate tag scans and generate timestamped events for
                     testing and demonstration purposes.
                  </p>
               </div>

               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                     Analytics & Visualization
                  </h3>
                  <p className="text-muted-foreground">
                     View scan activity over time with interactive charts and
                     customizable time filters.
                  </p>
               </div>

               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                     Event Monitoring
                  </h3>
                  <p className="text-muted-foreground">
                     Monitor all tag events in real-time with sortable and
                     paginated event logs.
                  </p>
               </div>

               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                     Reliable & Secure
                  </h3>
                  <p className="text-muted-foreground">
                     Built with TypeScript and comprehensive validation to
                     ensure data integrity and reliability.
                  </p>
               </div>

               <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                     <Scan className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">API Testing</h3>
                  <p className="text-muted-foreground">
                     Interactive API playground to test endpoints and explore
                     the TagTrackr API capabilities.
                  </p>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="container mx-auto px-4 py-20">
            <div className="bg-card border rounded-2xl p-12 text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to start tracking?
               </h2>
               <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get started with TagTrackr today and experience the power of
                  comprehensive tag management.
               </p>
               <Link to="/dashboard">
                  <Button size="lg" className="text-lg px-8 py-6">
                     Launch Dashboard
                     <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
               </Link>
            </div>
         </section>

         {/* Footer */}
         <footer className="container mx-auto px-4 py-8 border-t">
            <div className="text-center text-muted-foreground">
               <p>&copy; 2024 MediTrakr</p>
            </div>
         </footer>
      </div>
   );
}
