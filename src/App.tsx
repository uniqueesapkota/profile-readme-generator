import React, { useState, useEffect } from 'react';
import { Copy, Download, Github, Linkedin, Mail, Globe, Star, GitFork, Eye } from 'lucide-react';

const TypeWriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const SkillBar = ({ skill, level, color }: { skill: string; level: number; color: string }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedLevel(level), 500);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};

function App() {
  const [copied, setCopied] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Your Name',
    title: 'Full Stack Developer',
    username: 'yourusername',
    location: 'Your City, Country',
    website: 'https://yourwebsite.com',
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    bio: 'Passionate developer creating innovative solutions with modern technologies.',
  });

  const generateReadme = () => {
    return `<div align="center">

<!-- Header with Animated Wave -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=${profile.name}&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32"/>

<!-- Typing Animation -->
<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=2E86AB&center=true&vCenter=true&random=false&width=435&lines=Hi+👋+I'm+${profile.name};${profile.title};Welcome+to+my+GitHub!" alt="Typing SVG" />
</h1>

<!-- Profile Views Counter -->
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${profile.username}&label=Profile%20views&color=0e75b6&style=flat" alt="profile views" />
</p>

</div>

## 🚀 About Me

<img align="right" alt="Coding" width="400" src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif"/>

- 🔭 I'm currently working on **exciting projects**
- 🌱 I'm learning **cutting-edge technologies**
- 👯 I'm looking to collaborate on **open source projects**
- 💬 Ask me about **${profile.title.toLowerCase()}**
- 📫 How to reach me: **${profile.email}**
- ⚡ Fun fact: **I code with coffee and debug with determination!**

<br clear="both"/>

## 🛠️ Tech Stack

<div align="center">

### Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### Cloud & DevOps
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

## 📊 GitHub Analytics

<div align="center">
  
<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&layout=compact&langs_count=8&theme=tokyonight"/>

</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${profile.username}&theme=tokyonight" alt="GitHub Streak"/>
</div>

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${profile.username}&theme=tokyonight&no-frame=false&no-bg=false&margin-w=4" alt="GitHub Trophies"/>
</div>

## 📈 Contribution Graph

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${profile.username}&bg_color=1a1b27&color=70a5fd&line=70a5fd&point=bf91f3&area=true&hide_border=true" alt="Contribution Graph"/>
</div>

## 🎯 Featured Projects

<div align="center">

<a href="https://github.com/${profile.username}/project1">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=${profile.username}&repo=project1&theme=tokyonight" />
</a>
<a href="https://github.com/${profile.username}/project2">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=${profile.username}&repo=project2&theme=tokyonight" />
</a>

</div>

## 🤝 Connect with me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${profile.linkedin})
[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](${profile.website})
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${profile.email})
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${profile.username})

</div>

## 💰 Support My Work

<div align="center">

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/${profile.username})
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/${profile.username})

</div>

---

<div align="center">
  
### 💫 "Code is poetry, and every commit tells a story"

<img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />

*Thanks for visiting! Show some ❤️ by starring my repositories!*

</div>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateReadme());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([generateReadme()], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <Github className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <TypeWriter text="GitHub Profile README Generator" speed={50} />
                </h1>
                <p className="text-gray-600 mt-1">Create an impressive GitHub profile in minutes</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Copy className="h-5 w-5" />
                <span>{copied ? 'Copied!' : 'Copy README'}</span>
              </button>
              <button
                onClick={downloadReadme}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Profile Configuration</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Full Stack Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Username</label>
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://johndoe.dev"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={profile.linkedin}
                    onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>

              {/* Skills Demo */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills Preview</h3>
                <SkillBar skill="JavaScript/TypeScript" level={95} color="bg-yellow-500" />
                <SkillBar skill="React/Next.js" level={90} color="bg-blue-500" />
                <SkillBar skill="Node.js" level={88} color="bg-green-500" />
                <SkillBar skill="Python" level={85} color="bg-blue-600" />
                <SkillBar skill="AWS/Cloud" level={80} color="bg-orange-500" />
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Live Preview</h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-auto max-h-96">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4">README.md</span>
                </div>
                <pre className="whitespace-pre-wrap text-xs leading-relaxed">
{`# ${profile.name}
## ${profile.title}

🚀 Passionate developer creating innovative solutions
📍 Building the future, one commit at a time
💻 Open source enthusiast
🌟 Always learning, always growing

### 🛠️ Tech Stack
- Frontend: React, TypeScript, Next.js
- Backend: Node.js, Python, Java
- Database: MongoDB, PostgreSQL
- Cloud: AWS, Docker, Kubernetes

### 📫 Let's Connect!
- 🌐 Website: ${profile.website}
- 📧 Email: ${profile.email}
- 💼 LinkedIn: ${profile.linkedin}

"Code is poetry, and every commit tells a story"`}
                </pre>
              </div>
              
              {/* Feature Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Animated Elements</span>
                  </div>
                  <p className="text-xs text-blue-600">Typing animations, skill bars, and contribution graphs</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">GitHub Stats</span>
                  </div>
                  <p className="text-xs text-green-600">Real-time statistics and contribution tracking</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <GitFork className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">Tech Badges</span>
                  </div>
                  <p className="text-xs text-purple-600">Beautiful technology and skill badges</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Social Links</span>
                  </div>
                  <p className="text-xs text-orange-600">Professional networking and contact information</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 How to Use Your README</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Configure Profile</h4>
              <p className="text-sm text-gray-600">Fill in your personal information and customize the content</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Copy or Download</h4>
              <p className="text-sm text-gray-600">Get your README.md file and save it to your GitHub profile</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Upload to GitHub</h4>
              <p className="text-sm text-gray-600">Create a repository with your username and add the README.md</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;