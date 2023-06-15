const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const allChars =
  '∅abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]:;?><,./-=\\';
const chars = Array.from(allChars);

// 每个字符的字体大小
const fontSize = 16;

// 绘制的二维信息
const dimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

canvas.width = dimensions.width;
canvas.height = dimensions.height;

// 每一行的字符数量
const rows = Math.floor(dimensions.width / fontSize);
const currentHeights = Array.from({ length: rows }).fill(0);

const textColor = '#0F0';
const highlightColor = '#FF55BB';
const bgColor = 'rgba(0, 0, 0, 0.08)';

// 每次绘制一行内容
function draw() {
  // 给整个画板上一层0.08透明度的黑色背景
  context.fillStyle = bgColor;
  context.fillRect(0, 0, dimensions.width, dimensions.height);

  // 开始绘制当前行的文本
  context.fillStyle = textColor;
  context.font = `${fontSize}px monospace`;

  for (let i = 0; i < rows; i++) {
    const x = i * fontSize;
    const y = currentHeights[i] * fontSize;

    const char = chars[Math.floor(Math.random() * chars.length)];
    context.fillText(char, x, y);
    // 下一行的y坐标
    currentHeights[i] = currentHeights[i] + 1;

    // 从头开始
    if (
      currentHeights[i] * fontSize > dimensions.height &&
      Math.random() > 0.95
    ) {
      currentHeights[i] = 0;
    }
  }
}

setInterval(draw, 100);
