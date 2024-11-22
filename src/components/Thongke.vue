<template>
  <div class="container">
    <h1 class="title">Thống kê</h1>

    <!-- Biểu đồ doanh thu -->
    <div class="chart-container">
      <h2>Doanh thu theo tháng</h2>
      <canvas id="revenueChart"></canvas>
    </div>

    <!-- Biểu đồ sản phẩm bán chạy -->
    <div class="chart-container">
      <h2>Sản phẩm bán chạy</h2>
      <canvas id="bestSellingChart"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default defineComponent({
  setup() {
    // Dữ liệu giả lập
    const revenueData = {
      labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
      values: [12000000, 15000000, 18000000, 20000000, 22000000], // Doanh thu
    }

    const bestSellingData = {
      labels: ['Xúc xích A', 'Chả cá ', 'Nem chua ', 'Bánh tráng'],
      values: [150, 120, 100, 80], // Số lượng bán
    }

    onMounted(() => {
      // Vẽ biểu đồ doanh thu (Bar Chart)
      new Chart(document.getElementById('revenueChart') as HTMLCanvasElement, {
        type: 'bar',
        data: {
          labels: revenueData.labels,
          datasets: [
            {
              label: 'Doanh thu (VNĐ)',
              data: revenueData.values,
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: value => value.toLocaleString() + ' VNĐ',
              },
            },
          },
        },
      })

      // Vẽ biểu đồ sản phẩm bán chạy (Pie Chart)
      new Chart(
        document.getElementById('bestSellingChart') as HTMLCanvasElement,
        {
          type: 'pie',
          data: {
            labels: bestSellingData.labels,
            datasets: [
              {
                data: bestSellingData.values,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
          },
        },
      )
    })

    return {}
  },
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
}

.chart-container {
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

canvas {
  max-width: 100%;
  height: auto;
}
</style>
