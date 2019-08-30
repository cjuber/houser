create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip int,
    img text,
    mortgage decimal,
    rent decimal
);


insert into houses
(name,address,city,state,zip,img,mortgage,rent)
values
('Jerry', '1111 West Street', 'Wherever', 'GA',12345,'img URL goes here', 3500, 1600),
('George', '2222 West Street', 'Wherever', 'GA',12345,'img URL goes here', 2500, 1600),
('Cosmo', '333 West Street', 'Wherever', 'GA',12345,'img URL goes here', 2000, 1600);


