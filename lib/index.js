import Head from "next/head";
export default function Home() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "flex flex-col items-center justify-center min-h-screen py-2",
    },
    /*#__PURE__*/ React.createElement(
      Head,
      null,
      /*#__PURE__*/ React.createElement("title", null, "Create Next App"),
      /*#__PURE__*/ React.createElement("link", {
        rel: "icon",
        href: "/favicon.ico",
      })
    ),
    /*#__PURE__*/ React.createElement(
      "main",
      {
        className:
          "flex flex-col items-center justify-center w-full flex-1 px-20 text-center",
      },
      /*#__PURE__*/ React.createElement(
        "h1",
        {
          className: "text-6xl font-bold",
        },
        "Welcome to",
        " ",
        /*#__PURE__*/ React.createElement(
          "a",
          {
            className: "text-blue-600",
            href: "https://nextjs.org",
          },
          "Next.js!"
        )
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          className: "mt-3 text-2xl",
        },
        "Get started by editing",
        " ",
        /*#__PURE__*/ React.createElement(
          "code",
          {
            className: "p-3 font-mono text-lg bg-gray-100 rounded-md",
          },
          "pages/index.js"
        )
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className:
            "flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full",
        },
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://nextjs.org/docs",
            className:
              "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          },
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: "text-2xl font-bold",
            },
            "Documentation \u2192"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "mt-4 text-xl",
            },
            "Find in-depth information about Next.js features and API."
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://nextjs.org/learn",
            className:
              "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          },
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: "text-2xl font-bold",
            },
            "Learn \u2192"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "mt-4 text-xl",
            },
            "Learn about Next.js in an interactive course with quizzes!"
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://github.com/vercel/next.js/tree/master/examples",
            className:
              "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          },
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: "text-2xl font-bold",
            },
            "Examples \u2192"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "mt-4 text-xl",
            },
            "Discover and deploy boilerplate example Next.js projects."
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
            className:
              "p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600",
          },
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: "text-2xl font-bold",
            },
            "Deploy \u2192"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "mt-4 text-xl",
            },
            "Instantly deploy your Next.js site to a public URL with Vercel."
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "footer",
      {
        className: "flex items-center justify-center w-full h-24 border-t",
      },
      /*#__PURE__*/ React.createElement(
        "a",
        {
          className: "flex items-center justify-center",
          href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Powered by",
        " ",
        /*#__PURE__*/ React.createElement("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: "h-4 ml-2",
        })
      )
    )
  );
}
