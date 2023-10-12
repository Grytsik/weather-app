import { useEffect, useState } from "react";



const WindChart = ({ windSpeed }) => {
    const calculatePercentage = (value, max) => {
        return (value / max) * 100;
      };
    
      const progress = calculatePercentage(windSpeed, 100); // Предположим, что максимальная скорость ветра - 100 км/ч
    
      return (
        <div className="wind-speed-meter">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      );
    };
export default WindChart;
