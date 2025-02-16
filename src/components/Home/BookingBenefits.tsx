
import { Badge, Card } from "antd"
import { Stethoscope, Users, Lock } from "lucide-react"

export default function BookingBenefits() {
  const reasons = [
    {
      icon: <Stethoscope className="w-8 h-8 text-red-500" />,
      title: "Follow-Up Care",
      description:
        "We ensure continuity of care through regular follow-ups and communication, helping you stay on track with health goals.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Patient-Centered Approach",
      description:
        "We prioritize your comfort and preferences, tailoring our services to meet your individual needs and Care from Our Experts",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: "Convenient Access",
      description:
        "Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.",
    },
  ]


  return (
    <div className=" bg-white max-w-7xl mx-auto">

      {/* Why Book With Us Section */}
      <div className="container mx-auto px-4 pb-16 pt-8">
        <div className="text-center mb-12">
          <Badge  color="blue" className="!bg-blue-100 !text-blue-600 rounded-full !px-4 !py-1 mb-4 !font-semibold !mb-4">
            Why Book With Us
          </Badge>
          <h2 className="text-3xl font-bold text-[#1a1c3b]">Compelling Reasons to Choose</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1c3b] mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

