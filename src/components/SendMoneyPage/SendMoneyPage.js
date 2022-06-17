import React from "react"
import "./SendMoneyPage.css"

export const SendMoneyPage = () => {
  return (
    <div className="send">
      <div className="send_money">
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7346 0.103548L0.360394 8.67398C-0.161877 9.00731 -0.0955108 9.81499 0.423875 10.0586L3.49114 11.4881L11.7811 3.37275C11.9398 3.2157 12.1649 3.45608 12.0293 3.63877L5.07815 13.0457V15.6258C5.07815 16.3822 5.90051 16.6803 6.30448 16.1322L8.13675 13.6547L11.7321 15.3278C12.1418 15.5201 12.6092 15.2348 12.6843 14.7444L14.7618 0.898412C14.8599 0.250982 14.2338 -0.216962 13.7346 0.103548Z"
            fill="#FD3A6C"
          />
        </svg>
        <p>Send Money</p>
      </div>
    </div>
  )
}
