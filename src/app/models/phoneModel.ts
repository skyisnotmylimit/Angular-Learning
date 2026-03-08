export type PhoneDataValue = string | number | boolean;

export type PhoneDataType = Record<string, PhoneDataValue>;

export type PhoneType = {
  id: string;
  name: string;
  data: PhoneDataType | null;
};

export type PhonesApiResponse = PhoneType[];
