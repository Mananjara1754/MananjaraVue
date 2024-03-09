create sequence seq_categorie increment by 1 minvalue 1 START 1; 
create table categorie (
    id_categorie varchar default nextval('seq_categorie'),
    nom_categorie varchar,
    primary key (id_categorie)
);

create sequence seq_fruit increment by 1 minvalue 1 START 1; 
create table fruit (
    id_fruit varchar default nextval('seq_fruit'),
    nom_fruit varchar,
    couleur varchar,
    id_categorie varchar,
    primary key (id_fruit),
    foreign key (id_categorie) references categorie(id_categorie) 
);

insert into categorie(nom_categorie) values
('Vitamine A'),
('Vitamine B'),
('Vitamine C');

insert into fruit(nom_fruit,couleur,id_categorie) values
('Banane','Jaune',1),
('Raisin','Violet',2),
('Fraise','Rouge',3);