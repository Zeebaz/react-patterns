export interface IInfo {
  seconds?: number;
  infoA?: boolean;
  infoB?: boolean;
}

export const availableInfo = ({
  seconds = 1000,
  infoA = true,
  infoB = true,
}: IInfo): Promise<IInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        infoA,
        infoB,
      });
    }, seconds * 1000);
  });
};
