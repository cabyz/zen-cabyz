import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, useLocation, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useEffect, lazy, Suspense } from "react";
import "posthog-js";
import { CheckCircle } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Layout({
  children
}) {
  const location = useLocation();
  useEffect(() => {
  }, []);
  useEffect(() => {
  }, [location]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "antialiased",
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = () => {
  return /* @__PURE__ */ jsx("nav", { className: "fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4", children: ["hero", "problem", "solution", "methodology", "impact", "portfolio", "contact"].map((id) => /* @__PURE__ */ jsx(
    "a",
    {
      href: `#${id}`,
      className: "w-2 h-2 rounded-full bg-white/20 hover:bg-white/60 transition-colors",
      "aria-label": `Scroll to ${id}`
    },
    id
  )) });
};
function OrbitModel() {
  return /* @__PURE__ */ jsxs("div", { className: "aspect-square w-full rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden bg-zinc-950/50", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-1/2 h-1/2 border border-white/10 rounded-full animate-pulse" }) }),
    /* @__PURE__ */ jsx("span", { className: "text-zinc-600 text-xs tracking-widest uppercase", children: "Growth_Orbit" })
  ] });
}
function PortfolioCarousel() {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "aspect-video bg-zinc-900/50 border border-white/5 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-zinc-600 text-xs", children: [
    "Project_0",
    i
  ] }) }, i)) });
}
function Header({ menuItems, logo }) {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: logo }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: menuItems.map((item) => /* @__PURE__ */ jsx(
      "a",
      {
        href: item.to,
        className: "text-sm font-medium text-gray-400 hover:text-white transition-colors",
        children: item.text
      },
      item.to
    )) }),
    /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors", children: "Contact" })
  ] }) });
}
const SplineCanvas = lazy(() => import("./assets/spline-canvas-CHbE_k2G.js"));
const _index = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen",
    children: [/* @__PURE__ */ jsx(Header, {
      theme: "dark",
      isSticky: true,
      isStickyOverlay: true,
      withBorder: false,
      logo: /* @__PURE__ */ jsxs("a", {
        href: "/",
        "aria-label": "cabyz home",
        className: "inline-flex items-center h-8 md:h-9 gap-1 text-white",
        style: {
          fontFamily: "var(--font-atamiga), Inter, sans-serif"
        },
        children: [/* @__PURE__ */ jsx("img", {
          src: "/cabyz.png",
          alt: "",
          className: "w-8 h-8 md:w-9 md:h-9 object-contain shrink-0"
        }), /* @__PURE__ */ jsx("span", {
          className: "text-[14px] md:text-[15px] leading-none font-medium tracking-tight select-none",
          children: "cabyz"
        })]
      }),
      menuItems: [{
        to: "#hero",
        text: "Home"
      }, {
        to: "#problem",
        text: "Problem"
      }, {
        to: "#solution",
        text: "Solution"
      }, {
        to: "#methodology",
        text: "Method"
      }, {
        to: "#impact",
        text: "Results"
      }, {
        to: "#portfolio",
        text: "Portfolio"
      }, {
        to: "#contact",
        text: "Contact"
      }]
    }), /* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsxs("section", {
        id: "hero",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 relative bg-black overflow-hidden scroll-mt-24 md:scroll-mt-28",
        children: [/* @__PURE__ */ jsx("div", {
          className: "absolute inset-0 z-0 transform-gpu scale-[1.08] -translate-y-[6vh] md:-translate-y-[8vh] lg:-translate-y-[10vh]",
          children: /* @__PURE__ */ jsx(Suspense, {
            fallback: /* @__PURE__ */ jsx("div", {
              className: "absolute inset-0 z-0 flex items-center justify-center",
              children: /* @__PURE__ */ jsx("div", {
                className: "h-[420px] w-full bg-black/50 border-y border-gray-900"
              })
            }),
            children: /* @__PURE__ */ jsx(SplineCanvas, {
              scene: "https://prod.spline.design/ufUgFPE08coSA9RX/scene.splinecode",
              className: "w-full h-full"
            })
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[rgb(12,13,13)] via-[rgba(12,13,13,0.8)] to-transparent z-10 pointer-events-none"
        }), /* @__PURE__ */ jsx("div", {
          className: "relative z-20 text-center w-full max-w-[700px] mx-auto",
          children: /* @__PURE__ */ jsx("div", {
            className: "hero-subtitle-enter",
            children: /* @__PURE__ */ jsx("h1", {
              className: "h1 mx-auto mb-0 hero-text-shadow max-w-[540px]",
              children: "We invest in service businesses—and turn them into scalable assets."
            })
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        className: "content-wrap px-6 md:px-8 bg-transparent relative z-30 -mt-24 pt-32 text-white scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full"
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Introduction"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "space-y-4 md:space-y-6 text-gray-300 max-w-2xl text-left",
            children: /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "Turn a founder-dependent service business into a self-scaling cash machine—by installing acquisition infrastructure, AI-run ops, and an on-demand talent engine—without raising or using your capital."
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl",
            children: ["More booked revenue", "Less payroll drag", "Founder freed from the calendar", "Valuation compounding"].map((benefit) => /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-2 px-3 py-2 rounded-md border border-gray-800 bg-gray-900/50 text-gray-200",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-4 h-4 text-white"
              }), /* @__PURE__ */ jsx("span", {
                className: "text-sm",
                children: benefit
              })]
            }, benefit))
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-8 border border-gray-800 rounded-lg overflow-hidden",
            children: /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-2",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "bg-gray-900/50 px-4 py-3 border-r border-gray-800",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-xs text-gray-400 uppercase tracking-wider mb-1",
                  children: "CURRENT"
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-gray-300",
                  children: "World Class Entrepreneur"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "bg-gray-900/50 px-4 py-3",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-xs text-gray-400 uppercase tracking-wider mb-1",
                  children: "END OUTCOME"
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-gray-300",
                  children: "Achieve scale in your current business and partner on $10mil+ opportunity"
                })]
              })]
            })
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "problem",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-4 h-4 border-l border-gray-400 rounded-full animate-spin"
                })
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "The Problem"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-4 md:space-y-6 text-gray-300 max-w-3xl text-left",
            children: [/* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "Professional services firms are stuck trading time for money. You're maxed out on hours, struggling with feast-or-famine revenue cycles, and constantly starting over with custom projects."
            }), /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "While you're burning out delivering one-off work, smart competitors are building scalable systems that generate predictable revenue."
            }), /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "The solution isn't working harder—it's working systematically."
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "solution",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsx(CheckCircle, {
                  className: "w-4 h-4 text-gray-600"
                })
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Solution"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-4 md:space-y-6 text-gray-300 max-w-3xl mb-8 text-left",
            children: [/* @__PURE__ */ jsxs("p", {
              className: "leading-relaxed",
              children: ["We build complete ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "Growth Systems"
              }), "—not just software, but entire business transformations that turn your expertise into scalable, repeatable revenue engines."]
            }), /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "Each $25k system handles automated lead generation, client acquisition, delivery optimization, and expansion. Everything runs 24/7 while you focus on strategy."
            }), /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "Professional services firms scale from $500K to $3M+ ARR without hiring additional delivery staff."
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "border border-gray-800 rounded-lg overflow-hidden",
            children: /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-2",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "bg-gray-900/50 px-4 py-3 border-r border-gray-800",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-xs text-gray-400 uppercase tracking-wider mb-1",
                  children: "Current"
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-gray-300",
                  children: "Hours for Money"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "bg-gray-900/50 px-4 py-3",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "text-xs text-gray-400 uppercase tracking-wider mb-1",
                  children: "Outcome"
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-white font-medium",
                  children: "Scalable Systems"
                })]
              })]
            })
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "methodology",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-4 h-4 border-2 border-gray-400 rounded-full animate-pulse"
                })
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Methodology"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 max-w-2xl",
              children: "Seven systematically optimized phases that transform your business model from linear to exponential growth:"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [{
              phase: "01",
              title: "Awareness",
              description: "Automated lead generation systems that attract high-value prospects 24/7 through content, SEO, and targeted outreach."
            }, {
              phase: "02",
              title: "Education",
              description: "Value-first nurture sequences that build trust and position you as the obvious choice before sales conversations."
            }, {
              phase: "03",
              title: "Selection",
              description: "Qualification systems that ensure you only speak with ready-to-buy prospects who value premium services."
            }, {
              phase: "04",
              title: "Mutual Commit",
              description: "Proven sales processes and proposals that consistently close 6-figure engagements with confidence."
            }, {
              phase: "05",
              title: "Onboarding",
              description: "Streamlined client activation that reduces time-to-value and sets clear expectations from day one."
            }, {
              phase: "06",
              title: "Retention",
              description: "Systematic value delivery and communication that ensures long-term client relationships and renewals."
            }, {
              phase: "07",
              title: "Expansion",
              description: "Upselling and cross-selling frameworks that maximize lifetime value and create predictable growth."
            }].map((item, index) => /* @__PURE__ */ jsxs("div", {
              className: "p-4 border border-gray-800 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-lg font-medium mb-1 text-white",
                children: item.phase
              }), /* @__PURE__ */ jsx("h4", {
                className: "text-base font-medium mb-2 text-white",
                children: item.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-xs text-gray-400 leading-relaxed",
                children: item.description
              })]
            }, index))
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-6",
            children: /* @__PURE__ */ jsxs("p", {
              className: "text-sm text-gray-300",
              children: ["Each phase is systematically optimized with automation, processes, and technology to create ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "predictable, scalable revenue growth"
              }), "."]
            })
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "orbit",
        className: "px-6 md:px-8 py-16 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-[540px] mx-auto w-full",
          children: /* @__PURE__ */ jsx(OrbitModel, {})
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "impact",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-4 h-4 border-l-2 border-gray-400 rounded-full animate-spin"
                })
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Impact"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-4 md:space-y-6 text-gray-300 max-w-3xl text-left",
            children: [/* @__PURE__ */ jsxs("p", {
              className: "leading-relaxed",
              children: ["Law firms: ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "847% case volume increase"
              }), ". Insurance agencies: ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "94% retention"
              }), ". Marketing agencies: ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "$10M+ ARR"
              }), " without expanding teams."]
            }), /* @__PURE__ */ jsxs("p", {
              className: "leading-relaxed",
              children: ["Consistent metrics across implementations: ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "13.9x ROI"
              }), ", ", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "27-day payback"
              }), ",", /* @__PURE__ */ jsx("span", {
                className: "text-white font-medium",
                children: "$2.3M average revenue increase"
              }), " annually."]
            }), /* @__PURE__ */ jsx("p", {
              className: "leading-relaxed",
              children: "These results reflect systematic business transformation, not individual performance variations."
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "portfolio",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[960px] mx-auto w-full",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-8 mb-4 opacity-60",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-full h-full border border-gray-600 rounded-full"
              })
            }), /* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Portfolio"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 max-w-2xl",
              children: "Selected initiatives and incubations. Metrics shown are directional and for illustration."
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-4",
            children: /* @__PURE__ */ jsx(PortfolioCarousel, {})
          })]
        })
      }), /* @__PURE__ */ jsx("section", {
        id: "contact",
        className: "min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[540px] mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "mb-6",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "h2",
              children: "Ready to Scale?"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-400 max-w-2xl",
              children: "Only 3 spots remaining this quarter. Book your Growth Systems consultation and discover how to transform your professional services firm."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col sm:flex-row items-start gap-4",
            children: [/* @__PURE__ */ jsx("button", {
              className: "px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors",
              children: "Book Strategy Call"
            }), /* @__PURE__ */ jsx("div", {
              className: "text-sm text-gray-500 mt-2 sm:mt-3",
              children: "🔒 No commitment required • 30-minute consultation"
            })]
          })]
        })
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CIGGOHi0.js", "imports": ["/assets/chunk-JMJ3UQ3L-DA8ds6Ek.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/root-BRn2ySs0.js", "imports": ["/assets/chunk-JMJ3UQ3L-DA8ds6Ek.js"], "css": ["/assets/root-_qiqslik.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/_index-DbnFe6Yo.js", "imports": ["/assets/chunk-JMJ3UQ3L-DA8ds6Ek.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-bdc8c718.js", "version": "bdc8c718", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/"];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
