// Gợi ý: thêm animation nhẹ khi nhập vào ô tìm kiếm
document.getElementById('searchBox').addEventListener('focus', () => {
    document.getElementById('searchBox').style.boxShadow = '0 0 10px rgba(196,154,108,0.4)';
  });
  
  document.getElementById('searchBox').addEventListener('blur', () => {
    document.getElementById('searchBox').style.boxShadow = 'none';
  });
  