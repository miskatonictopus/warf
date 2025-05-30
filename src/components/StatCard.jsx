import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export function StatCard({ title, value, changeText, data }) {
  return (
    <Card className=" bg-white text-black dark:bg-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-xl h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="h3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mb-4">{changeText}</p>
        {/* <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <XAxis dataKey="label" hide />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", border: "none" }}
              labelStyle={{ color: "#ccc" }}
              cursor={{ stroke: "#888", strokeDasharray: "3 3" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#fff"
              strokeWidth={1}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer> */}
      </CardContent>
    </Card>
  );
}
