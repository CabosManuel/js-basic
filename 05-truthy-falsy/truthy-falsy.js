// falses
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

// trues
Boolean(-1); // cualquier número != 0
Boolean("a"); // cualquier caracter o espacio en blanco
Boolean([]); // array lleno y vacío
Boolean({}); // objeto lleno y vacío
Boolean(function(){}); 