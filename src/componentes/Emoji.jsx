import React from "react";

function Emoji({group, emojis}) {
    const emojiStyle = {
        fontSize: '2em', // Cambia el tamaño a tu preferencia
      };

      const copyEmoji = (emojiCharacter) => {
        navigator.clipboard.writeText(emojiCharacter)
        .then(() => {
            console.log("Emoji copiado: " + emojiCharacter);
          })
          .catch((error) => {
            console.error("Error al copiar el emoji al portapapeles:", error);
          });
      };

  return (
    <div key={group} className="row row-cols-6">
      <>
      {emojis
          .filter((emoji) => emoji.group === group)
          .map((emoji) => (
            <div className="col-1 border-white emoji rounded-2" style={emojiStyle} onClick={() => copyEmoji(emoji.character)}  key={emoji.codePoint}>
              {emoji.character}
            </div>
          ))}
      </>
    </div>
  );
}

export default Emoji;
