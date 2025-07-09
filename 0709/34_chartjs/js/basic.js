// Chart.jsのグローバルオブジェクト
let chart;

const label = "Votes";
// X軸のデータ
const labels = ['Red', 'Blue', 'Yellow'];
// const labels = [1, 2, 3];
// Y軸のデータ
const values = [12, 19, 3];
const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)'
];
const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)'
];

// 初期グラフの描画
function renderChart() {
    // canvasからコンテキストを作成
    const ctx = document.getElementById('barChart').getContext('2d');
    // Chart.jsのインスタンスを作成
    chart = new Chart(ctx, {
        // TODO: グラフの種類を指定
        type: '',
        data: {
            // TODO: X軸のデータ: labels
            labels: [],
            datasets: [{
                // TODO: データセットのラベル: label
                label: '',
                // TODO: Y軸のデータ: data
                data: [],
                // TODO: 塗りつぶしの色: backgroundColor
                backgroundColor: [],
                // TODO: 枠線の色: borderColor
                borderColors: [],
                // TODO: 枠線の太さ: borderWidth
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                // 凡例の表示設定
                legend: {
                    display: true
                }
            },
        }
    });
}

renderChart();