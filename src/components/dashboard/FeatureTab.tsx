import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent } from "../ui/card"
import { BarChart, LineChart, PieChart, Activity, FileText, Eye } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureTabProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

const FeatureTab = ({ activeTab = "supervision", onTabChange = () => {} }: FeatureTabProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const handleTabChange = (value: string) => {
    onTabChange(value)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-6 rounded-xl shadow-md">
      <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="supervision" className="text-lg py-3">
            <Eye className="mr-2 h-5 w-5" />
            Site Supervision
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="text-lg py-3">
            <Activity className="mr-2 h-5 w-5" />
            Real-time Monitoring
          </TabsTrigger>
          <TabsTrigger value="reports" className="text-lg py-3">
            <FileText className="mr-2 h-5 w-5" />
            Report Generation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="supervision" className="mt-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Streamlined Site Supervision</h3>
              <p className="text-gray-600">
                Monitor all aspects of your construction site with our intuitive supervision tools.
                Track worker attendance, equipment usage, and safety compliance in real-time.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { title: "Worker Tracking", icon: "👷‍♂️", percent: 85 },
                  { title: "Equipment Monitoring", icon: "🚜", percent: 92 },
                  { title: "Safety Compliance", icon: "🛡️", percent: 78 },
                  { title: "Task Management", icon: "📋", percent: 88 }
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className={`transition-all duration-300 ${hoveredFeature === feature.title ? "bg-blue-50 scale-105" : "bg-white"}`}
                    onMouseEnter={() => setHoveredFeature(feature.title)}
                    onMouseLeave={() => setHoveredFeature(null)}>
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h4 className="font-medium text-gray-800">{feature.title}</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${feature.percent}%` }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{feature.percent}% efficiency</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <BarChart className="w-full h-64 text-blue-600" />
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="monitoring" className="mt-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Real-time Site Monitoring</h3>
              <p className="text-gray-600">
                Get instant insights into your construction site's performance with real-time
                monitoring tools. Track progress, identify bottlenecks, and optimize resource
                allocation.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6">
                {[
                  {
                    title: "Live Progress Tracking",
                    value: "87%",
                    change: "+2.3%"
                  },
                  {
                    title: "Resource Utilization",
                    value: "76%",
                    change: "+5.1%"
                  },
                  {
                    title: "Delay Detection",
                    value: "12 min",
                    change: "-3 min"
                  }
                ].map((metric, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-800">{metric.title}</h4>
                        <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                      </div>
                      <div
                        className={`text-sm ${metric.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {metric.change} from last week
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <LineChart className="w-full h-64 text-blue-600" />
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="reports" className="mt-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Automated Report Generation</h3>
              <p className="text-gray-600">
                Generate comprehensive reports with a single click. Our automated reporting system
                compiles data from all site activities and presents it in easy-to-understand
                formats.
              </p>
              <div className="space-y-4 mt-6">
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Report Types</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Daily Progress",
                        "Safety Compliance",
                        "Resource Allocation",
                        "Financial Summary",
                        "Quality Control",
                        "Timeline Analysis"
                      ].map((report, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                          <span className="text-sm">{report}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Export Options</h4>
                    <div className="flex space-x-3">
                      {[
                        { format: "PDF", color: "bg-red-100 text-red-600" },
                        {
                          format: "Excel",
                          color: "bg-green-100 text-green-600"
                        },
                        {
                          format: "CSV",
                          color: "bg-yellow-100 text-yellow-600"
                        },
                        {
                          format: "JSON",
                          color: "bg-purple-100 text-purple-600"
                        }
                      ].map((format, index) => (
                        <span
                          key={index}
                          className={`${format.color} px-3 py-1 rounded-full text-sm font-medium`}>
                          {format.format}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <PieChart className="w-full h-64 text-blue-600" />
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default FeatureTab
