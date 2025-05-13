export function signaturePlugin() {
  return {
    name: '24papa-signature-plugin',
    transformIndexHtml(html) {
      const signature = `
        <script>
          window.__24PAPADOLLAR__ = {
            name: '24PapaDollar',
            email: 'groupemergents@gmail.com',
            website: 'https://groupemergent.vercel.app',
            github: 'https://github.com/PapaDollars',
            buildDate: '${new Date().toISOString()}'
          };
          
          let originalTitle = document.title;
          let signatureShown = false;
          
          window.addEventListener('blur', () => {
            if (!signatureShown) {
              document.title = '👨‍💻 By 24PapaDollar - ' + originalTitle;
              signatureShown = true;
            }
          });
          
          window.addEventListener('focus', () => {
            document.title = originalTitle;
          });
        </script>
        
        <!-- 
          🚀 Developed by 24PapaDollar (Group Emergent)
          📧 Contact: groupemergents@gmail.com
          🌐 Website: https://groupemergent.vercel.app
          ⭐ GitHub: https://github.com/PapaDollars
        -->
      `;
      return html.replace('<head>', '<head>' + signature);
    }
  };
}