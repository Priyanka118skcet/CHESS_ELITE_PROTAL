// AChart.js
import React from "react";
import "../../styles/chart/Chart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import ImageGrid from './ImageGrid';

const Header = () => {
  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
    </header>
  );
};

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
//     </footer>
//   );
// };

const GridCard = ({ title, content }) => {
  return (
    <div className="grid-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const AChart = () => {
  const data = [
    { name: "EXCELLENT", CSE: 2000000000 },
    { name: "GOOD", CSE: 1500000000 },
    { name: "AVERAGE", CSE: 1000000000 },
    { name: "LOWEST", CSE: 500000000 },
  ];

  return (
    <div className="admin-panel">
      <div className="main-content">
        <div className="image-grid-container">
          <ImageGrid />
        </div>
        <div className="grid-container">
         <GridCard title="Game Statistics" content="
    Total number of games played
    Win loss ratios
    Most popular opening moves">
</GridCard>

<GridCard title="Player Activity" content="
    Number of active players
    Recent player logins
    Player feedback and suggestions">
</GridCard>

<GridCard title="Piece Analytics" content="
  Explore analytics related to chess pieces
    Frequency of piece captures
    Most valuable pieces in winning games
    Least utilized pieces">
</GridCard>

<GridCard title="Game History" content="
    Searchable game archive
    Replay past games
    View game summaries and outcomes">
</GridCard>
        </div>
        
        
            <div className="pie-chart">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="CSE"
                  isAnimationActive={false}
                  data={data}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
          
          </div>
            <div className="bar-chart">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: -5,
                  right: 30,
                  left: 80,
                  bottom: 40,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="CSE"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
        </div>
      </div>
      
    </div>
  );
};

export default AChart;
