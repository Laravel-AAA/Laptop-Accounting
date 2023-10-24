// Laravel will give you `null` value for nullable fields in the database;
// So, optional fields should never treated as `undefined`.
// ❌ `name?:string`
// ✅ `name:string|null`
// This way we can easily use triple equal `===`/`!==` with null values
// and be confident we don't treat falsy values (e.g., "false", 0, "",...etc) as `null`.
export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: IUser;
  };
  business: IBusiness;
};

export interface IProduct extends ICreateProduct {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface ICreateProduct {
  name: string;
  imageFile: File | null;
  img: string | null;
  /**barcode numbers */
  barcode: string | null;
  price: number | null;
  stock: number | null;
  description: string | null;
}

export interface IBill extends ICreateBill {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateBill {
  cashReceived: number | null;
  transactions: ICreateTransaction[];
}

export interface ITransaction extends ICreateTransaction {
  id: string;
  created_at: string;
  updated_at: string;
  bill_id: string;
}
export interface ICreateTransaction {
  quantity: number;
  product_id: string;
  product: IProduct;
}

export interface IBusiness {
  taxPercent: number;
  //todo...
}

export interface ILaravelPaginate<T extends object> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    active: boolean;
    label: string;
    url: string | null;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

/**if the state of the modal is `create` then no data needed but when updating or showing there will be a data (data is Product, User...etc)
 */
export type IModalAction<T extends object> = {
  open: boolean;
} & (
    | {
      state: "create";
      data: null;
    }
    | {
      state: "edit" | "show";
      data: T;
    }
  );

//shared filter between resources
type IFilter<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  search: string;
};

type PagePropsWithFilter<T extends IFilter >
  = PageProps & {
    filter: T
  }


export interface IFilterProduct extends IFilter { }

export interface IFilterBill extends IFilter { }

export interface IFilterCheckout extends IFilter {
  barcode: string;
}