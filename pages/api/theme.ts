import { NextApiRequest, NextApiResponse } from "next";

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  // Simular la identificación del cliente (por query, subdominio, etc.)
  const { theme } = req.query;

  const themes: { [key: string]: Theme } = {
    default: {
      primaryColor: "#000",
      secondaryColor: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    clientA: {
      primaryColor: "#1e90ff",
      secondaryColor: "#f0f8ff",
      fontFamily: "Roboto, sans-serif",
    },
    clientB: {
      primaryColor: "#ff6347",
      secondaryColor: "#f5deb3",
      fontFamily: "Open Sans, sans-serif",
    },
  };
  
  res.setHeader('Content-Type', 'text/css');
  res.send(`
    :root {
      --primary-color: ${themes[theme as string].primaryColor};
      --secondary-color: ${themes[theme as string].secondaryColor};
      --font-family: ${themes[theme as string].fontFamily};
    }
  `);
}
