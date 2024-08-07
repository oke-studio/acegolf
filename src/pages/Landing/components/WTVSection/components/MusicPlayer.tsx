export const MusicPlayer = () => {
  return (
    <div className="mt-6 flex h-[200px]  w-full rounded-lg md:w-[400px]">
      <iframe
        title="wtv_spotify_iframe"
        className="rounded-xl"
        src="https://open.spotify.com/embed/playlist/72hITZ4d6zKMgsczBtqREI?utm_source=generator"
        width="100%"
        height="152"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        id="spotifyIframe"
      />
    </div>
  )
}
