import React, { Component } from "react";
import { sessions } from "./data.js";

class SessionSharing extends Component {
  render() {
    const session_render = sessions.map((session, index) =>
      sessionCard(session, index),
    );

    return (
      <div className="px-[18px] pb-[150px] mt-[50px] md:mt-[120px] md:px-[120px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
            SESSION SHARING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Knowledge Sharing Sessions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=""
          id="sessions"
        >
          <div className="bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 rounded-[45px] px-[20px] md:px-[35px] pt-[28px] pb-[45px] backdrop-blur-sm border border-white/10">
            {/* Mobile & Desktop: Horizontal Scrollable Flex Container */}
            <div className="w-full px-1 py-2">
              <div className="flex overflow-x-auto gap-3 md:px-[35px] custom-scrollbar">
                {session_render}
              </div>
              <div className="text-center mt-4 text-xs text-gray-300 select-none">
                <span className="block md:hidden">
                  Swipe right/left to see more &rarr;
                </span>
                <span className="hidden md:block">
                  Scroll right/left to see more &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    function sessionCard(data, index) {
      return (
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          key={index}
          className="w-full hover:shadow-lg duration-300 flex-shrink-0 md:w-1/3 md:mx-auto mb-[35px] mt-2  overflow-hidden shadow-xl p-5 md:ease-in-out md:duration-300 rounded-[45px] border-white/20"
          style={{ minHeight: "400px" }}
        >
          <div className="relative overflow-hidden">
            <img
              src={"img/" + data.pic}
              alt="Session Sharing Poster"
              className="mx-auto relative h-full w-full object-cover rounded-[25px]"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background =
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                e.target.parentElement.style.height = "220px";
                e.target.parentElement.innerHTML += `
                <div class='flex items-center justify-center h-full text-white text-center p-8'>
                  <div>
                    <div class='text-4xl mb-4'>🎯</div>
                    <div class='text-xl font-bold mb-2'>Session Sharing</div>
                    <div class='text-sm'>Knowledge Sharing Poster</div>
                  </div>
                </div>
              `;
              }}
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
              {index + 1} / {sessions.length}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SessionSharing;
