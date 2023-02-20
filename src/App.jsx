import React, { useEffect, useState } from 'react'

export default function App() {
  const [time, setTime] = useState({ m: 25, s: 0 });
  const [status, setStatus] = useState(0);
  const [inter, setInter] = useState();
  const [part, setPart] = useState(25);
  var upDatedMinute = time.m;
  var upDatedSecund = time.s;
  function getTime() {
    run();
    setInter(setInterval(run, 10));
    setStatus(1);
  }
  function pauseTime() {
    clearInterval(inter);
    setStatus(2);
  }
  function resumeTime() {
    getTime();
    setStatus(1);
  }
  function resetTime(newTime) {
    clearInterval(inter);
    setTime({ m: newTime, s: 0 });
    setStatus(0);
  }
  function pomodoro(delay) {
    clearInterval(inter);
    setTime({ m: delay, s: 0 });
    setStatus(0);
    setPart(delay);
  }
  function shortBreak(delay) {
    clearInterval(inter);
    setTime({ m: delay, s: 0 });
    setStatus(0);
    setPart(delay);
  }
  function longBreak(delay) {
    clearInterval(inter);
    setTime({ m: delay, s: 0 });
    setStatus(0);
    setPart(delay);
  }
  const run = () => {
    if (upDatedMinute == 0 && upDatedSecund == 0) {
      upDatedSecund++;
      setStatus(3)
    }
    if (upDatedSecund == 0) {
      upDatedMinute--;
      upDatedSecund = 60;
    }
    upDatedSecund--;
    return setTime({ m: upDatedMinute, s: upDatedSecund })
  }
  return (
    <div className='wrapper'>
      <div className="filter">
        <div className="brand_wrapper">
          <li className="brand">Study with me</li>
          <p>by <span>lazy boy</span></p>
        </div>
        <div className="pomo_zone">
          <div className="pomo_btn_zone">
            <button className='pomo_btn' onClick={() => pomodoro(25)} style={part == 25 ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "transparent" }}>Pomodoro</button>
            <button className='pomo_btn' onClick={() => shortBreak(5)} style={part == 5 ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "transparent" }}>Short break</button>
            <button className='pomo_btn' onClick={() => longBreak(15)} style={part == 15 ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "transparent" }}>Long break</button>
          </div>
          <h1 className='pomo_time'>{time.m < 10 ? `0${time.m}` : time.m}:{time.s < 10 ? `0${time.s}` : time.s}</h1>
          {(status == 0) ? <button className='pomo_start_btn' onClick={() => getTime()}>Start</button> : ""}
          {(status == 1) ? <div style={{ display: "flex" }}>
            <button className='pomo_pause_btn' onClick={() => pauseTime()}>Pause</button>
            <button className='pomo_reset_btn' onClick={() => resetTime()}><i class="fa-solid fa-rotate-right"></i></button>
          </div> : ""}
          {(status == 2) ? <div style={{ display: "flex" }}>
            <button className='pomo_resume_btn' onClick={() => resumeTime()}>Resume</button>
            <button className='pomo_reset_btn' onClick={() => resetTime(part)}><i class="fa-solid fa-rotate-right"></i></button>
          </div> : ""}
          {(status == 3) ? <button className='pomo_start_btn' onClick={() => resetTime(part)}><i class="fa-solid fa-rotate-right"></i></button> : ""}
        </div>
        <iframe className='spotify' src="https://open.spotify.com/embed/playlist/7DnmCDhK7A3PXLgeXdQ7gp?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}
