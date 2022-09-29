CREATE TABLE IF NOT EXISTS public.adress 
(
    id INTEGER PRIMARY KEY NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL, 
    district VARCHAR(255) NOT NULL, 
    street VARCHAR(255) NOT NULL, 
    number VARCHAR(100), 
    cep VARCHAR(9) NOT NULL, 
    complement VARCHAR(255) ,
    id_customer INTEGER NOT NULL,
    FOREIGN KEY (id_customer) REFERENCES customer (id_customer)
);