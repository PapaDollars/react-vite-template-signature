export const initSignature = () => {
  const signature = `
  ██████╗  █████╗ ██████╗  █████╗    ██████╗  ██████╗ ██╗     ██╗      █████╗ ██████╗ 
  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗   ██╔══██╗██╔═══██╗██║     ██║     ██╔══██╗██╔══██╗
  ██████╔╝███████║██████╔╝███████║   ██║  ██║██║   ██║██║     ██║     ███████║██████╔╝
  ██╔═══╝ ██╔══██║██╔═══╝ ██╔══██║   ██║  ██║██║   ██║██║     ██║     ██╔══██║██╔══██╗
  ██║     ██║  ██║██║     ██║  ██║   ██████╔╝╚██████╔╝███████╗███████╗██║  ██║██║  ██║
  ╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝   ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
  
  🚀 Developed by 24PapaDollar (Group Emergent)
  📧 groupemergents@gmail.com
  🌐 https://groupemergent.vercel.app
  📱 Version: ${import.meta.env.VITE_APP_VERSION || 'dev'}
  🗓️ Build: ${new Date().toLocaleString()}
  `;

  const messages = [
    '%c' + signature,
    'color: #10b981; font-family: monospace;',
    '%c🔥 Créé avec passion par Group Emergent 🔥',
    'color: #ef4444; font-size: 16px; font-weight: bold;',
    '%cBesoin d\'un site web professionnel? Contactez-nous! 💼',
    'color: #3b82f6; font-size: 14px;',
    '%c⭐ GitHub: https://github.com/PapaDollars ⭐',
    'color: #f59e0b; font-size: 14px;'
  ];

  console.log(...messages);
  
  const meta = document.createElement('meta');
  meta.name = 'developer';
  meta.content = '24PapaDollar - groupemergents@gmail.com';
  document.head.appendChild(meta);
};