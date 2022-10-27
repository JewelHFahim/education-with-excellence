import React from "react";

const FAQ = () => {
  return (
    <div className=" min-h-screen bg-base-100">
      <div className="w-9/12 mx-auto mt-12 shadow-lg">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Which versions of React include Hooks?
          </div>
          <div className="collapse-content">
            <p>
              Starting with 16.8.0, React includes a stable implementation of
              React Hooks for: <li>React DOM</li> <li>React Native</li>{" "}
              <li>React DOM Server</li> <li>React Test Renderer</li>{" "}
              <li>React Shallow Renderer</li>
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            Do I need to rewrite all my class components?
          </div>
          <div className="collapse-content">
            <p>
              No. There are no plans to remove classes from React — we all need
              to keep shipping products and can’t afford rewrites. We recommend
              trying Hooks in new code.
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            What can I do with Hooks that I couldn’t with classes?
          </div>
          <div className="collapse-content">
            <p>
              Hooks offer a powerful and expressive new way to reuse
              functionality between components. “Building Your Own Hooks”
              provides a glimpse of what’s possible. This article by a React
              core team member dives deeper into the new capabilities unlocked
              by Hooks.
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            How much of my React knowledge stays relevant?
          </div>
          <div className="collapse-content">
            <p>
              Hooks are a more direct way to use the React features you already
              know — such as state, lifecycle, context, and refs. They don’t
              fundamentally change how React works, and your knowledge of
              components, props, and top-down data flow is just as relevant.
              Hooks do have a learning curve of their own. If there’s something
              missing in this documentation, raise an issue and we’ll try to
              help.
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            Should I use Hooks, classes, or a mix of both?
          </div>
          <div className="collapse-content">
            <p>
              When you’re ready, we’d encourage you to start trying Hooks in new
              components you write. Make sure everyone on your team is on board
              with using them and familiar with this documentation. We don’t
              recommend rewriting your existing classes to Hooks unless you
              planned to rewrite them anyway (e.g. to fix bugs).
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-slate-300 bg-base-100 rounded-box mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            Do Hooks cover all use cases for classes?
          </div>
          <div className="collapse-content">
            <p>
              Our goal is for Hooks to cover all use cases for classes as soon
              as possible. There are no Hook equivalents to the uncommon
              getSnapshotBeforeUpdate, getDerivedStateFromError and
              componentDidCatch lifecycles yet, but we plan to add them soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
