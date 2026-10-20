import React from 'react'
import './Dashboard.css'
import videos from '../videos.js'
const Dashboard = () => {
    return (
        <>
            <div className="youtube-app">
                <header className="topbar">
                    <div className="brand"><span className="brand-mark"><span /></span><span>YouTube</span></div>
                </header>

                <div className="page-layout">
                    <aside className="sidebar" aria-label="Sidebar">
                        <nav>
                            <div className="sidebar-section">
                                <ul className="sidebar-list">
                                    <li className="sidebar-link active"><span aria-hidden="true">⌂</span>Home</li>
                                    <li className="sidebar-link"><span aria-hidden="true">▷</span>Shorts</li>
                                    <li className="sidebar-link"><span aria-hidden="true">▣</span>Subscriptions</li>
                                </ul>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-section">
                                <h2 className="sidebar-heading">You</h2>
                                <ul className="sidebar-list">
                                    <li className="sidebar-link"><span aria-hidden="true">◷</span>History</li>
                                    <li className="sidebar-link"><span aria-hidden="true">▤</span>Playlists</li>
                                    <li className="sidebar-link"><span aria-hidden="true">♡</span>Liked videos</li>
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    <main className="main-content" id="home">
                        <h1>Recommended videos</h1>
                        <section className="video-grid" aria-label="Video list">
                            {videos.map((video) => (
                                <article className="video-card" key={video.image}>
                                    <div className="thumbnail-wrap">
                                        <img className="thumbnail" src={video.image} alt={video.title} />
                                        <span className="duration">{video.duration}</span>
                                    </div>
                                    <div className="video-info">
                                        <div className={`channel-avatar avatar-${video.avatar.toLowerCase()}`}>{video.avatar}</div>
                                        <div className="video-copy">
                                            <h2>{video.title}</h2>
                                            <p className="channel-name">{video.channel}<span className="verified">✓</span></p>
                                            <p>{video.views} <span className="dot">·</span>{video.age}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard