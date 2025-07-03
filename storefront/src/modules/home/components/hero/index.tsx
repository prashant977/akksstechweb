import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import React from "react";
// import { Link } from "react-router-dom";
// import { Laptop, Leaf, MapPin } from "lucide-react"; 
// import { Button } from "@/components/ui/button";
import treeIcon from "@/assets/tree-icon.png";
import heroLaptop from "@/assets/hero-laptop.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-0.2 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary uppercase tracking-wide">
                  Empowering Minds, Enabling Tech
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Sustainable
                  <span className="text-primary block">Technology</span>
                  for a Greener Future
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Every laptop you buy plants a tree. Join our mission to reduce e-waste and create a sustainable digital world while contributing to the UN Sustainable Development Goals.
                </p>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <div className="floating-element">
                  {/* <img src={treeIcon} alt="Tree" className="h-12 w-12 tree-animation" /> */}
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">12,847</div>
                  <div className="text-sm text-muted-foreground">Trees Planted</div>
                </div>
                <div className="h-8 w-px bg-border dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-primary">8,234</div>
                  <div className="text-sm text-muted-foreground">Laptops Sold</div>
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/store?category=new">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Laptop className="mr-2 h-5 w-5" />
                    I want to buy new
                  </Button>
                </Link>
                <Link to="/store?category=refurbished">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Leaf className="mr-2 h-5 w-5" />
                    I want to buy refurbished
                  </Button>
                </Link>
              </div> */}
              <div className="text-sm text-muted-foreground">
                <p>
                  🌱 By choosing refurbished, you save <span className="font-semibold text-primary">300kg CO₂</span> per laptop
                </p>
              </div>
              
            </div>
            
            <div className="relative">
              <div className="floating-element">
                {/* <img src={heroLaptop} alt="Sustainable Laptop" className="w-full h-auto rounded-2xl shadow-2xl" /> */}
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg floating-element">
                {/* <Leaf className="h-6 w-6" /> */}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg floating-element" style={{ animationDelay: "2s" }}>
                {/* <MapPin className="h-6 w-6 text-primary" /> */}
              </div>
              
            </div>
            

          </div>
          {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AKKSS Tech?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just selling laptops - we're building a sustainable future, one device at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-accent/50 hover:bg-accent transition-colors duration-300">
              <div className="bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {/* <Leaf className="h-8 w-8" /> */}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">One Laptop, One Tree</h3>
              <p className="text-muted-foreground">
                For every laptop purchased, we plant a tree in partnership with global reforestation organizations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-accent/50 hover:bg-accent transition-colors duration-300">
              <div className="bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {/* <MapPin className="h-8 w-8" /> */}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Track Your Impact</h3>
              <p className="text-muted-foreground">
                See exactly where your tree was planted and track the environmental impact of your purchase.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-accent/50 hover:bg-accent transition-colors duration-300">
              <div className="bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {/* <Laptop className="h-8 w-8" /> */}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                All our laptops, new and refurbished, come with comprehensive warranties and quality assurance.
              </p>
            </div>
          </div>
        </div>
        </section>
  

      {/* SDG Alignment Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AKKSS Tech is committed to building a better and greener planet. Our initiatives directly contribute to multiple UN SDGs, creating positive impact for people and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SDG 13: Climate Action */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-800">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">13</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Climate Action</h3>
              <p className="text-sm text-muted-foreground text-center">
                Tree planting and refurbished laptops reduce carbon footprint and combat climate change.
              </p>
            </div>

            {/* SDG 12: Responsible Consumption */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 dark:border-orange-800">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">12</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Responsible Consumption</h3>
              <p className="text-sm text-muted-foreground text-center">
                Promoting circular economy through refurbished electronics and sustainable practices.
              </p>
            </div>

            {/* SDG 15: Life on Land */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-800">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">15</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Life on Land</h3>
              <p className="text-sm text-muted-foreground text-center">
                Reforestation efforts protect biodiversity and restore degraded ecosystems.
              </p>
            </div>

            {/* SDG 4: Quality Education */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Quality Education</h3>
              <p className="text-sm text-muted-foreground text-center">
                Empowering minds with accessible technology for digital literacy and learning.
              </p>
            </div>
          </div>


          {/* Impact Statistics */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Our Global Impact</h3>
              <p className="text-muted-foreground">Building a better and greener place to live</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12,847</div>
                <div className="text-muted-foreground">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8,234</div>
                <div className="text-muted-foreground">Laptops Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3,850</div>
                <div className="text-muted-foreground">Tons CO₂ Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,500</div>
                <div className="text-muted-foreground">Communities Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join AKKSS Tech and be a part of the sustainable technology revolution.
          </p>
          {/* <Link to="/store">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Laptops
            </Button>
          </Link> */}
          </div>
      </section>
    </div> {/* ✅ close main wrapper */}
    </section>
    </div>
  
  );
}

export default Hero
