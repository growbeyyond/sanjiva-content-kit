import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ProgressTrackerProps {
  type: "pcos" | "thyroid";
}

const ProgressTracker = ({ type }: ProgressTrackerProps) => {
  // Mock data for demonstration
  const pcosData = [
    { month: "Month 1", periodRegularity: 30, energy: 40, mood: 35, skin: 30 },
    { month: "Month 2", periodRegularity: 50, energy: 55, mood: 50, skin: 45 },
    { month: "Month 3", periodRegularity: 70, energy: 70, mood: 65, skin: 60 },
    { month: "Month 4", periodRegularity: 85, energy: 80, mood: 80, skin: 75 },
    { month: "Month 5", periodRegularity: 90, energy: 85, mood: 85, skin: 85 },
    { month: "Month 6", periodRegularity: 95, energy: 90, mood: 90, skin: 90 },
  ];

  const thyroidData = [
    { month: "Month 1", t3: 2.3, t4: 6.5, tsh: 8.5 },
    { month: "Month 2", t3: 2.5, t4: 7.0, tsh: 7.0 },
    { month: "Month 3", t3: 2.8, t4: 8.0, tsh: 5.5 },
    { month: "Month 4", t3: 3.0, t4: 9.0, tsh: 4.0 },
    { month: "Month 5", t3: 3.2, t4: 10.0, tsh: 3.0 },
    { month: "Month 6", t3: 3.5, t4: 11.0, tsh: 2.5 },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">
        {type === "pcos" ? "PCOS Progress Tracker" : "Thyroid Levels Tracker"}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {type === "pcos" 
          ? "Track improvements in period regularity, energy, mood, and skin health"
          : "Monitor T3, T4, and TSH levels over your treatment journey"}
      </p>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={type === "pcos" ? pcosData : thyroidData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend />
          {type === "pcos" ? (
            <>
              <Line 
                type="monotone" 
                dataKey="periodRegularity" 
                stroke="#ec4899" 
                strokeWidth={2}
                name="Period Regularity"
              />
              <Line 
                type="monotone" 
                dataKey="energy" 
                stroke="#a855f7" 
                strokeWidth={2}
                name="Energy"
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="#6366f1" 
                strokeWidth={2}
                name="Mood"
              />
              <Line 
                type="monotone" 
                dataKey="skin" 
                stroke="#f472b6" 
                strokeWidth={2}
                name="Skin Health"
              />
            </>
          ) : (
            <>
              <Line 
                type="monotone" 
                dataKey="t3" 
                stroke="#ec4899" 
                strokeWidth={2}
                name="T3 Levels"
              />
              <Line 
                type="monotone" 
                dataKey="t4" 
                stroke="#a855f7" 
                strokeWidth={2}
                name="T4 Levels"
              />
              <Line 
                type="monotone" 
                dataKey="tsh" 
                stroke="#6366f1" 
                strokeWidth={2}
                name="TSH Levels"
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 p-4 bg-primary-light rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is a sample visualization. Your actual progress will be tracked based on your consultation data and test results.
        </p>
      </div>
    </Card>
  );
};

export default ProgressTracker;
