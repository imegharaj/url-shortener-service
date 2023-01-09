import { Request, Response } from 'express';
import shortUrl, { IShortURL } from './shortUrl.model';

export const createShortUrl = async (req: Request, res: Response) => {
  const { fullUrl } = req.body as IShortURL;
  const newUrl = await shortUrl.create({ fullUrl });
  return res.send(newUrl);
};

export const handleRedirect = async (req: Request, res: Response) => {
  const { urlId } = req.params;

  const shortUrlResult = await shortUrl.findOne({ urlId }).lean();

  if (!shortUrlResult) {
    return res.status(404).send('URL Id does not exist');
  }

  return res.redirect(shortUrlResult.fullUrl);
};

export const getShortUrl = async (req: Request, res: Response) => {
  const { urlId } = req.params;
  const shortUrlResult = await shortUrl.findOne({ urlId }).lean();

  if (!shortUrlResult) {
    return res.status(404).send('URL Id does not exist');
  }

  return res.json(shortUrlResult);
};

export const updateShortUrl = async (req: Request, res: Response) => {
  const { urlId } = req.params;
  const { fullUrl } = req.body as IShortURL;
  const shortUrlResult = await shortUrl.updateOne({ urlId }, { fullUrl });

  if (!shortUrlResult) {
    return res.sendStatus(404);
  }

  return res.json(shortUrlResult);
};

export const deleteShortUrl = async (req: Request, res: Response) => {
  const { urlId } = req.params;
  const shortUrlResult = await shortUrl.findOneAndDelete({ urlId }).lean();

  if (!shortUrlResult) {
    return res.sendStatus(404);
  }

  return res.json(shortUrlResult);
};
