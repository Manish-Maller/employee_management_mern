# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
npm create vite@latest
cd FrontEnd
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Hi</span>
          </div>
        </div>
        </div>
      )}
    </div>