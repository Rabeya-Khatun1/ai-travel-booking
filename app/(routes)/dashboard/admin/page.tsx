"use client";

import { PieChart as PieIcon, LineChart as LineIcon, Users, DollarSign, Activity } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const trafficData = [
  { name: 'Mon', active: 1200 },
  { name: 'Tue', active: 1300 },
  { name: 'Wed', active: 1900 },
  { name: 'Thu', active: 1500 },
  { name: 'Fri', active: 2200 },
  { name: 'Sat', active: 3100 },
  { name: 'Sun', active: 2800 },
];

const destinationPie = [
  { name: 'Europe', value: 400 },
  { name: 'Asia', value: 300 },
  { name: 'Americas', value: 300 },
  { name: 'Africa', value: 200 },
];
const COLORS = ['#2563EB', '#0D9488', '#F59E0B', '#EF4444'];

export default function AdminOverview() {
  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in zoom-in-95">
      <div>
        <h1 className="text-3xl font-bold">System Overview</h1>
        <p className="text-foreground/60">Welcome back Admin, here's what's happening today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Users", val: "54,231", icon: <Users className="w-5 h-5" />, trend: "+12%" },
          { title: "Total Revenue", val: "$1.2M", icon: <DollarSign className="w-5 h-5" />, trend: "+4%" },
          { title: "Active Trips", val: "1,204", icon: <LineIcon className="w-5 h-5" />, trend: "+18%" },
          { title: "Server Load", val: "24%", icon: <Activity className="w-5 h-5" />, trend: "-2%" }
        ].map((kpi, i) => (
          <div key={i} className="bg-background rounded-2xl p-6 border border-foreground/10 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-primary/10 text-primary rounded-xl">{kpi.icon}</div>
               <span className={`text-sm font-bold ${kpi.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                 {kpi.trend}
               </span>
            </div>
            <h3 className="text-foreground/60 text-sm font-medium mb-1">{kpi.title}</h3>
            <div className="text-3xl font-black">{kpi.val}</div>
          </div>
        ))}
      </div>

      {/* Charts Array */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Line Chart */}
        <div className="bg-background col-span-1 lg:col-span-2 rounded-2xl p-6 border border-foreground/10 shadow-sm min-h-[400px] flex flex-col">
          <h3 className="font-bold text-lg mb-6">Revenue Growth</h3>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" strokeOpacity={0.1} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Distribution Pie */}
        <div className="bg-background rounded-2xl p-6 border border-foreground/10 shadow-sm flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2 self-start">Regional Bookings</h3>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={destinationPie}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {destinationPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4 mt-auto justify-center">
            {destinationPie.map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                 {d.name}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-background rounded-2xl p-6 border border-foreground/10 shadow-sm min-h-[300px]">
         <h3 className="font-bold text-lg mb-6">Weekly Active Users (Traffic)</h3>
         <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" strokeOpacity={0.1} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="active" fill="#0D9488" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
      
    </div>
  );
}
