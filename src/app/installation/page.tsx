// Modules
import { HiExternalLink } from 'react-icons/hi';
import Link from 'next/link';
import CodeBlock from '@/components/Ui/CodeBlock/CodeBlock';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';
import {
  INSTALLATION_CODES_CSS_IMPORT,
  INSTALLATION_CODES_REACT_ICONS,
  INSTALLATION_CODES_TAILWINDCSS,
  INSTALLATION_CODES_VITE_CONFIG_PLUGIN,
} from './InstallationCodes';

const InstallationGuidePage = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-sm font-medium">COMPONENTLAB/</h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Getting Started</h2>
        <p className="mt-10 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify">
          ComponentLAB is designed with low dependency, focusing solely on delivering clean,
          reusable code to help you build your next accessible component with ease. With a simple
          installation process, you can quickly &nbsp;
          <code className="bg-gray-200 px-1 border-1 rounded-lg text-black">copy</code> and &nbsp;
          <code className="bg-gray-200 px-1 border-1 rounded-lg text-black">paste</code> any
          component&apos;s code block to get your component up and running. Additionally, all
          components are fully compatible with Tailwind CSS, making it effortless to customize and
          style them to fit your project&apos;s needs.
        </p>
      </div>
      <div>
        <div className="mt-10">
          <p className="font-bold text-3xl">Installation</p>
          <p className="mt-2 mb-4 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify">
            We only need two dependencies for using our components, tailwindcss and react-icon
            library.
          </p>
          <div>
            <p className="font-bold border-2 rounded-lg bg-gray-200 p-1 inline">STEP 1</p>
            <div className="border-l-4 border-dotted mt-5">
              <div className="ml-2">
                <p>
                  React Icons is a popular library for using SVG icons in React applications. It
                  provides thousands of icons from popular icon packs like Font Awesome, Material
                  Design, Ionicons, Feather, Heroicons, and more, all as React components. Click
                  the&nbsp;
                  <code className="bg-gray-200 px-1 border-1 rounded-lg text-black">copy icon</code>
                  &nbsp; and run it in your terminal to get react-icons &nbsp;
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation">
                    Click to Learn more
                  </span>
                  <Link href={'https://react-icons.github.io/react-icons/'} target="_blank">
                    <HiExternalLink
                      size={20}
                      className="inline ml-2 hover:scale-105 hover:cursor-pointer transition-all duration-150"
                    />
                  </Link>
                </p>
                <CodeBlock
                  codes={INSTALLATION_CODES_REACT_ICONS}
                  codeLanguage="bash"
                  fileName="terminal"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold border-2 rounded-lg bg-gray-200 p-1 inline">STEP 2</p>
            <div className="border-l-4 border-dotted mt-5">
              <div className="ml-2">
                <p>
                  Tailwind CSS is a utility-first CSS framework that allows developers to style web
                  applications directly in the HTML or JSX using predefined utility classes. Follow
                  the commands below, click the&nbsp;
                  <code className="bg-gray-200 px-1 border-1 rounded-lg text-black">copy icon</code>
                  &nbsp; and run the following commands, as simple as that.&nbsp;
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation">
                    Click to Learn more
                  </span>
                  <Link href={'https://tailwindcss.com/'} target="_blank">
                    <HiExternalLink
                      size={20}
                      className="inline ml-2 hover:scale-105 hover:cursor-pointer transition-all duration-150"
                    />
                  </Link>
                </p>
                <CodeBlock
                  codes={INSTALLATION_CODES_TAILWINDCSS}
                  codeLanguage="bash"
                  fileName="terminal"
                />
                <CodeBlock
                  codes={INSTALLATION_CODES_VITE_CONFIG_PLUGIN}
                  codeLanguage="bash"
                  fileName="vite.config.ts"
                />
                <CodeBlock
                  codes={INSTALLATION_CODES_CSS_IMPORT}
                  codeLanguage="bash"
                  fileName="index.css"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        paginationTitle="Official installation guide"
        previousRoute="/"
        previousRouteTitle="Home"
        nextRoute="/button"
        nextRouteTitle="Button"
      />
      <Footer />
    </div>
  );
};

export default InstallationGuidePage;
