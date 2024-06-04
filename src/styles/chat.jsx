const ChatStyles = {
    textDisplayBackground: {
      sx: {
        height: "auto",
        padding: "24px 24px 150px 24px",
        display: "flex",
        flexDirection: "column",
      },
    },
    reXMessage: {
      sx: {
        display: "flex",
        padding: "16px 24px",
        width: "300px",
        margin: "0 0 16px 0",
        float: "left",
        gap: "10px",
        borderRadius: "8px 20px 20px 20px",
        background: "var(--Greyscale-100, #F5F5F5)",
      },
    },
    reXMessageText: {
      sx: {
        color: "var(--Greyscale-900, #212121)",
        fontFamily: "Satoshi",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "140%",
        letterSpacing: "0.2px",
      },
    },
    userMessage: {
      sx: {
        display: "flex",
        padding: "16px 24px",
        width: "300px",
        margin: "0 0 16px 0",
        float: "right",
        gap: "10px",
        borderRadius: "20px 20px 8px 20px",
        background: "var(--Primary-500, #6949FF)",
      },
    },
    userMessageText: {
      sx: {
        color: "var(--Others-White, #FFF)",
        fontFamily: "Satoshi",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "140%",
        letterSpacing: "0.2px",
      },
    },
    toSendArea: {
      sx: {
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        position: "fixed",
        bottom: 48,
        width: "90%",
        margin: "24px 0",
      },
    },
    textArea: {
      sx: {
        height: "56px",
        padding: "0px 20px",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        flex: "1 0 0",
        borderRadius: "12px",
        background: "var(--Greyscale-50, #FAFAFA)",
      },
    },
    sendButton: {
      sx: {
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "100px",
        background:
          "var(--Gradients-Gradident-Purple, linear-gradient(286deg, #6949FF 0%, #876DFF 100%))",
      },
    },
    sendButtonImage: {
      sx: {
        display: "flex",
        width: "24px",
        height: "24px",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };
  
  export default ChatStyles;