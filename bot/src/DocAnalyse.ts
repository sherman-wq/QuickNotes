import fs from "fs";

const read = (filePath: string) => {
    const readableStreem = fs.createReadStream(filePath);
    
}