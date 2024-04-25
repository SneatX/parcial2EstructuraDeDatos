export const enunciados = [
    `Teniendo en cuenta que en el año 2022 hubo cambio de gobierno en Colombia, el valor de las divisas afectan de manera directa la economía del país, en dicho caso usted debe tratar de proyectar cada mes el valor de la divisa, para ello, usted debe consultar en al Banco de la República la serie histórica este periodo hasta hoy a través del portal: https://www.banrep.gov.co/es/estadisticas/trm, indique cual fue el periodo estuvo más alto y cuál el más bajo el precio de la divisa.`,
    `Implementa y ejecuta los métodos de ordenamiento en cada arreglo. Compara el tiempo de ejecución y el número de comparaciones para determinar cuál método es más eficiente en este escenario. `,
    `Ejecuta los métodos de ordenamiento mencionados anterior mente para evaluar los siguientes arreglos casi ordenados. Observa cómo se comporta cada algoritmo y cuál es más eficiente en términos de tiempo de ejecución.`,
    `Ejecuta los métodos de ordenamiento mencionados anterior mente para evaluar los siguientes arreglos casi ordenados. Observa cómo se comporta cada algoritmo y cuál es más eficiente en términos de tiempo de ejecución.`,
    `Compara los métodos de ordenamiento. Analiza cómo cada algoritmo maneja este tipo de entrada y cuál es más rápido en esta situación.`,
    `Ejecuta los métodos de ordenamiento mencionados anterior mente para evaluar los siguientes arreglos casi ordenados. Observa cómo se comporta cada algoritmo y cuál es más eficiente en términos de tiempo de ejecución.`,
    `Ordenamiento de Valores Repetidos, evalúe cómo se comportan los métodos de ordenamiento en esta situación. Determina cuál método es más adecuado para lidiar con repeticiones.`,
    `Ordenamiento de Valores Repetidos, evalúe cómo se comportan los métodos de ordenamiento en esta situación. Determina cuál método es más adecuado para lidiar con repeticiones.`
]

export const analisis = [
    `Para este caso se tenían que organizar dos arrays, uno con los valores de las divisas y las fechas a la par, esto para que cada posición del array de fechas coincidiera con su posición en el array de divisas, y viendo los resultados obtenidos en la tabla se puede denotar que Quick Sort y HeapSort son los métodos que tuvieron un menor tiempo de ejecución (0 milisegundos) y también tuvieron menos consumo de memoria (alrededor de 8.5 mb), de estos métodos le sigue de cerca ShellSort con un tiempo ligeramente mayor y después mergeSort y radixSort, con el mismo tiempo (1 milisegundo) que Shell pero un mayor consumo de memoria (casi 16 mb)`,
    `Para este caso se tenían que organizar un único array con 100 numeros con orden aleatorio, como se puede ver en la tabla al no ser un numero de datos muy grande en el rendimiento en cuestión del tiempo no hubieron diferencias apreciables, donde si se vieron diferencias fue en el consumo de memoria donde QuickSort, MergeSort, RadixSort y HeapSort consume alrededor de la mitad (12.5 mb) de el consumo normal de los otros métodos de ordenamiento.`,
    `En el caso de los nombres casi ordenados tampoco se puede ver mucha diferencia en el tiempo que toca el algoritmo de principio a fin, aun así es RadixSort la mejor opción si hablamos de consumo de memoria, pero viene seguido muy de cerca por HeapSort y MergeSort`,
    `En el caso de los numeros casi ordenados tampoco se puede ver mucha diferencia en el tiempo que toca el algoritmo de principio a fin, aun así es RadixSort siguen siendo la mejor opción al igual que los nombres poco ordenados si hablamos de consumo de memoria`,
    `En el caso de los nombres invertidos no se puede apreciar mucha diferencia en el tiempo que usa el algoritmo de principio a fin, aun así es HeapSort por consumo de memoria es un poco mejor respecto a RadixSort y Merge Sort`,
    `Como se puede observar en la tabla, las diferencias de tiempo son casi imperceptibles en volúmenes de datos tan pequeños, lo único que varia un poco son el consumo de MergeSort, RadixSort y HeapSort, que por lo general siempre consumen menos memoria.`,
    `En el caso de los nombres repetidos los métodos que menos tiempo usan son el ShellSort, RadixSort y HeapSort, siendo este ultimo la mejor opción por el consumo de memoria utilizado, seguido muy de cerca por RadixSort`,
    `Como se puede observar, casi todos loe métodos tomaron la misma cantidad de tiempo para su ejecución, por lo que nos fijaremos en el consumo de memoria para determinar cual metodo conviene utilizar en el caso de un array de números repetidos, En este caso RadixSort es el metodo con menor cantidad de memoria consumida durante su proceso, seguido de cerca por MergeSort y HeapSort`
]

export const codigosBurbuja = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenarBurbuja(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenarBurbuja(double[] valores, String[] fechas) {
            int n = valores.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (valores[j] > valores[j + 1]) {
                        double temp = valores[j];
                        valores[j] = valores[j + 1];
                        valores[j + 1] = temp;
    
                        String var = fechas[j];
                        fechas[j] = fechas[j+1];
                        fechas[j + 1] = var;
                    }
                }
            }
        }
    
        public static void imprimirVector(double[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {
        public static void bubbleSort(String[] arr){
            int n = arr.length;
            for(int i = 0; i < n-1; i++){
                for(int j = 0; j < n-i-1; j++){
                    if(arr[j].compareTo(arr[j+1]) > 0) {
                        String temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
        }
        public static void main(String[] args){
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
            
            System.out.println("Array original: ");
            imprimirVector(nombres);
        
            long startTime = System.currentTimeMillis();
    
            bubbleSort(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(String[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {
        public static void bubbleSort(String[] arr){
            int n = arr.length;
            for(int i = 0; i < n-1; i++){
                for(int j = 0; j < n-i-1; j++){
                    if(arr[j].compareTo(arr[j+1]) > 0) {
                        String temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
        }
        public static void main(String[] args){
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
            
            System.out.println("Array original: ");
            imprimirVector(nombres);
        
            long startTime = System.currentTimeMillis();
    
            bubbleSort(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(String[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {
    
        public static void bubbleSort(int[] arr){
            int n = arr.length;
            for(int i = 0; i < n-1; i++){
                for(int j = 0; j < n-i-1; j++){
                    if(arr[j] > arr[j+1]) {
                        int temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
        }
        
        public static void main(String[] args){
            
            int[] numeros = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
            
            System.out.println("Array original: ");
            imprimirVector(numeros);
    
            long startTime = System.currentTimeMillis();
    
            bubbleSort(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(int[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {
        public static void bubbleSort(String[] arr){
            int n = arr.length;
            for(int i = 0; i < n-1; i++){
                for(int j = 0; j < n-i-1; j++){
                    if(arr[j].compareTo(arr[j+1]) > 0) {
                        String temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
        }
        public static void main(String[] args){
            String[] nombres = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
            
            System.out.println("Array original: ");
            imprimirVector(nombres);
        
            long startTime = System.currentTimeMillis();
    
            bubbleSort(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(String[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {

        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
    
        public static void main(String[] args) {
    
            int[] numeros = { 1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Array original: ");
            imprimirVector(numeros);
    
            long startTime = System.currentTimeMillis();
    
            bubbleSort(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(int[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {
        public static void bubbleSort(String[] arr){
            int n = arr.length;
            for(int i = 0; i < n-1; i++){
                for(int j = 0; j < n-i-1; j++){
                    if(arr[j].compareTo(arr[j+1]) > 0) {
                        String temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
        }
        public static void main(String[] args){
            String[] nombres = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
            
            System.out.println("Array original: ");
            imprimirVector(nombres);
        
            long startTime = System.currentTimeMillis();
    
            bubbleSort(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(String[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class BubbleSortNames {

        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
    
        public static void main(String[] args) {
    
            int[] numeros = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Array original: ");
            imprimirVector(numeros);
    
            long startTime = System.currentTimeMillis();
    
            bubbleSort(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\n\nArray ordenado: ");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void imprimirVector(int[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `
]

export const codigosBurbujaMejorado = [
    `
    class Main {
        public static void main(String[] args) {
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
            long startTime = System.currentTimeMillis();
            ordenacionBurbuja(vec, fechas);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        public static double[] ordenacionBurbuja(double vec[], String[] fechas){
            final int N = vec.length;
            for(int i = N-1; i > 0; i--){
              for(int j = 0; j < i; j++){
                if(vec[j] > vec[j+1]){
                  double aux = vec[j];
                  vec[j] = vec[j+1];
                  vec[j+1] = aux;
    
                  String temp = fechas[j];
                  fechas[j] = fechas[j+1];
                  fechas[j+1] = temp;
                }
              }
            }
          return vec;
          }
      
        public static void imprimirVector(double[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    
    `,
    `
    class Main
    {
      public static void main (String[] args) throws java.lang.Exception
      {
        String  vec[] = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
  
        System.out.println("Este es el vector original: ");
        imprimirVector(vec);
  
        long startTime = System.currentTimeMillis();
  
        vec = ordenacionBurbuja(vec);
  
        long endTime = System.currentTimeMillis();
        long executionTime = endTime - startTime;
        Runtime runtime = Runtime.getRuntime();
        long memory = runtime.totalMemory() - runtime.freeMemory();
  
        System.out.println("Este es el vector ordenado: ");
        imprimirVector(vec);
  
        System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
        System.out.println("Memoria utilizada: " + memory + " bytes");
  
      }
      public static String[] ordenacionBurbuja(String vec[]){
        final int N = vec.length;
        for(int i = N-1; i > 0; i--){
          for(int j = 0; j < i; j++){
            if(vec[j].compareTo(vec[j+1])> 0){
              String aux = vec[j];
              vec[j] = vec[j+1];
              vec[j+1] = aux;
            }
          }
        }
      return vec;
      }
  
      public static void imprimirVector(String vec[]){
        for(int i = 0; i < vec.length; i++){
          System.out.print(vec[i] + " ");
        }
      }
      
    }
    `,
    `
    class Main
    {
      public static void main (String[] args) throws java.lang.Exception
      {
        String  vec[] = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
  
        System.out.println("Este es el vector original: ");
        imprimirVector(vec);
  
        long startTime = System.currentTimeMillis();
  
        vec = ordenacionBurbuja(vec);
  
        long endTime = System.currentTimeMillis();
        long executionTime = endTime - startTime;
        Runtime runtime = Runtime.getRuntime();
        long memory = runtime.totalMemory() - runtime.freeMemory();
  
        System.out.println("Este es el vector ordenado: ");
        imprimirVector(vec);
  
        System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
        System.out.println("Memoria utilizada: " + memory + " bytes");
  
      }
      public static String[] ordenacionBurbuja(String vec[]){
        final int N = vec.length;
        for(int i = N-1; i > 0; i--){
          for(int j = 0; j < i; j++){
            if(vec[j].compareTo(vec[j+1])> 0){
              String aux = vec[j];
              vec[j] = vec[j+1];
              vec[j+1] = aux;
            }
          }
        }
      return vec;
      }
  
      public static void imprimirVector(String vec[]){
        for(int i = 0; i < vec.length; i++){
          System.out.print(vec[i] + " ");
        }
      }
      
    }
    `,
    `
    class Main {
        public static void main(String[] args) throws java.lang.Exception {
    
            int[] vec = { 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104 };
    
            System.out.println("Este es el vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionBurbuja(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nEste es el vector ordenado: ");
            imprimirVector(vec);
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionBurbuja(int vec[]) {
            final int N = vec.length;
            for (int i = N - 1; i > 0; i--) {
                for (int j = 0; j < i; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int aux = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = aux;
                    }
                }
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    class Main
    {
      public static void main (String[] args) throws java.lang.Exception
      {
        String  vec[] = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
  
        System.out.println("Este es el vector original: ");
        imprimirVector(vec);
  
        long startTime = System.currentTimeMillis();
  
        vec = ordenacionBurbuja(vec);
  
        long endTime = System.currentTimeMillis();
        long executionTime = endTime - startTime;
        Runtime runtime = Runtime.getRuntime();
        long memory = runtime.totalMemory() - runtime.freeMemory();
  
        System.out.println("Este es el vector ordenado: ");
        imprimirVector(vec);
  
        System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
        System.out.println("Memoria utilizada: " + memory + " bytes");
  
      }
      public static String[] ordenacionBurbuja(String vec[]){
        final int N = vec.length;
        for(int i = N-1; i > 0; i--){
          for(int j = 0; j < i; j++){
            if(vec[j].compareTo(vec[j+1])> 0){
              String aux = vec[j];
              vec[j] = vec[j+1];
              vec[j+1] = aux;
            }
          }
        }
      return vec;
      }
  
      public static void imprimirVector(String vec[]){
        for(int i = 0; i < vec.length; i++){
          System.out.print(vec[i] + " ");
        }
      }
      
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShaker(int vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j < limiteInferior; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j] < vec[j - 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main
    {
      public static void main (String[] args) throws java.lang.Exception
      {
        String  vec[] = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
  
        System.out.println("Este es el vector original: ");
        imprimirVector(vec);
  
        long startTime = System.currentTimeMillis();
  
        vec = ordenacionBurbuja(vec);
  
        long endTime = System.currentTimeMillis();
        long executionTime = endTime - startTime;
        Runtime runtime = Runtime.getRuntime();
        long memory = runtime.totalMemory() - runtime.freeMemory();
  
        System.out.println("Este es el vector ordenado: ");
        imprimirVector(vec);
  
        System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
        System.out.println("Memoria utilizada: " + memory + " bytes");
  
      }
      public static String[] ordenacionBurbuja(String vec[]){
        final int N = vec.length;
        for(int i = N-1; i > 0; i--){
          for(int j = 0; j < i; j++){
            if(vec[j].compareTo(vec[j+1])> 0){
              String aux = vec[j];
              vec[j] = vec[j+1];
              vec[j+1] = aux;
            }
          }
        }
      return vec;
      }
  
      public static void imprimirVector(String vec[]){
        for(int i = 0; i < vec.length; i++){
          System.out.print(vec[i] + " ");
        }
      }
      
    }
    `,
    `
    class Main {
        public static void main(String[] args) throws java.lang.Exception {
    
            int[] vec = { 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Este es el vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionBurbuja(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nEste es el vector ordenado: ");
            imprimirVector(vec);
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionBurbuja(int vec[]) {
            final int N = vec.length;
            for (int i = N - 1; i > 0; i--) {
                for (int j = 0; j < i; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int aux = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = aux;
                    }
                }
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    
    `
]

export const codigsoQuickSort = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionRapida(double arr[], String[] fechas) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1, fechas);
        }
        
        public static void quickSort(double arr[], int inicio, int fin, String[] fechas) {
            if (inicio >= fin) return;
            double pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq] < pivote) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer] >= pivote) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    double temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
    
                    String aux = fechas[elemIzq];
                    fechas[elemIzq] = fechas[elemDer];
                    fechas[elemDer] = aux;
                }
            }
            
            if (elemDer > inicio) {
                double temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
    
                String aux = fechas[elemDer];
                fechas[elemDer] = fechas[inicio];
                fechas[inicio] = aux;
            }
            quickSort(arr, inicio, elemDer - 1, fechas);
            quickSort(arr, elemDer + 1, fin, fechas);
        }
    
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
            
            System.out.println("Nombres original:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nNombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(String arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(String arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            String pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq].compareTo(pivote) < 0) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer].compareTo(pivote) >= 0) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    String temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                String temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirNombres(String arr[]) {
            for (String nombre : arr) {
                System.out.print(nombre + " ");
            }
            System.out.println();
        }
    }
    
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
            
            System.out.println("Nombres original:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nNombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(String arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(String arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            String pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq].compareTo(pivote) < 0) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer].compareTo(pivote) >= 0) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    String temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                String temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirNombres(String arr[]) {
            for (String nombre : arr) {
                System.out.print(nombre + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] numeros = { 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104 };
            
            System.out.println("Vector original:");
            imprimirVector(numeros);
            
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector ordenado:");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(int arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(int arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            int pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq] < pivote) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer] >= pivote) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    int temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                int temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirVector(int arr[]) {
            for (int num : arr) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        public static void main(String[] args) {
            String[] arr = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
    
            radixSort(arr);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static void radixSort(String[] arr) {
            int longitudMaxima = encontrarLongitudMaxima(arr);
            for (int exp = 1; exp <= longitudMaxima; exp++) {
                countingSort(arr, exp);
            }
        }
    
        static int encontrarLongitudMaxima(String[] arr) {
            int longitudMaxima = arr[0].length();
            for (int i = 1; i < arr.length; i++) {
                if (arr[i].length() > longitudMaxima) {
                    longitudMaxima = arr[i].length();
                }
            }
            return longitudMaxima;
        }
    
        static void countingSort(String[] arr, int exp) {
            int n = arr.length;
            String[] output = new String[n];
            int[] count = new int[256]; // ASCII tiene 256 caracteres
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                if (exp <= arr[i].length()) {
                    count[arr[i].charAt(arr[i].length() - exp)]++;
                } else {
                    count[0]++;
                }
            }
            for (int i = 1; i < 256; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                if (exp <= arr[i].length()) {
                    output[count[arr[i].charAt(arr[i].length() - exp)] - 1] = arr[i];
                    count[arr[i].charAt(arr[i].length() - exp)]--;
                } else {
                    output[count[0] - 1] = arr[i];
                    count[0]--;
                }
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] numeros = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
            
            System.out.println("Vector original:");
            imprimirVector(numeros);
            
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector ordenado:");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(int arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(int arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            int pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq] < pivote) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer] >= pivote) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    int temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                int temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirVector(int arr[]) {
            for (int num : arr) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
            
            System.out.println("Nombres original:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nNombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(String arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(String arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            String pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq].compareTo(pivote) < 0) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer].compareTo(pivote) >= 0) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    String temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                String temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirNombres(String arr[]) {
            for (String nombre : arr) {
                System.out.print(nombre + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] numeros = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
            
            System.out.println("Vector original:");
            imprimirVector(numeros);
            
            long startTime = System.currentTimeMillis();
    
            ordenacionRapida(numeros);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector ordenado:");
            imprimirVector(numeros);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        
        public static void ordenacionRapida(int arr[]) {
            final int N = arr.length;
            quickSort(arr, 0, N - 1);
        }
        
        public static void quickSort(int arr[], int inicio, int fin) {
            if (inicio >= fin) return;
            int pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq] < pivote) {
                    elemIzq++;
                }
                while (elemDer > inicio && arr[elemDer] >= pivote) {
                    elemDer--;
                }
                if (elemIzq < elemDer) {
                    int temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;
                }
            }
            
            if (elemDer > inicio) {
                int temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;
            }
            quickSort(arr, inicio, elemDer - 1);
            quickSort(arr, elemDer + 1, fin);
        }
        
        public static void imprimirVector(int arr[]) {
            for (int num : arr) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
    `
]

export const codigoShellSort = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionShell(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static double[] ordenacionShell(double vec[], String[] fechas) {
            final int N = vec.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        double v = vec[j];
                        String s = fechas[j];
                        int n = j - k;
                        while (n >= 0 && vec[n] > v) {
                            vec[n + k] = vec[n];
                            fechas[n+k] = fechas[n];
                            n -= k;
                        }
                        vec[n + k] = v;
                        fechas[n + k] = s;
                    }
                }
                k /= 2;
            }
            return vec;
        }
    
        public static void imprimirVector(double[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Nombres sin ordenar:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionShell(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Nombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShell(String[] nombres) {
            final int N = nombres.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        String v = nombres[j];
                        int n = j - k;
                        while (n >= 0 && nombres[n].compareTo(v) > 0) {
                            nombres[n + k] = nombres[n];
                            n -= k;
                        }
                        nombres[n + k] = v;
                    }
                }
                k /= 2;
            }
            return nombres;
        }
    
        public static void imprimirNombres(String[] nombres) {
            for (int i = 0; i < nombres.length; i++) {
                System.out.print(nombres[i] + " ");
            }
            System.out.println();
        }
    }
    
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Nombres sin ordenar:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionShell(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Nombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShell(String[] nombres) {
            final int N = nombres.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        String v = nombres[j];
                        int n = j - k;
                        while (n >= 0 && nombres[n].compareTo(v) > 0) {
                            nombres[n + k] = nombres[n];
                            n -= k;
                        }
                        nombres[n + k] = v;
                    }
                }
                k /= 2;
            }
            return nombres;
        }
    
        public static void imprimirNombres(String[] nombres) {
            for (int i = 0; i < nombres.length; i++) {
                System.out.print(nombres[i] + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
            System.out.println("Vector Original:");
            imprimirVector(vec);
            System.out.println("\n");
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionShell(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector Ordenado:");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShell(int vec[]) {
            final int N = vec.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        int v = vec[j];
                        int n = j - k;
                        while (n >= 0 && vec[n] > v) {
                            vec[n + k] = vec[n];
                            n -= k;
                        }
                        vec[n + k] = v;
                    }
                }
                k /= 2;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println();
        }
    }
    
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Nombres sin ordenar:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionShell(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Nombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShell(String[] nombres) {
            final int N = nombres.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        String v = nombres[j];
                        int n = j - k;
                        while (n >= 0 && nombres[n].compareTo(v) > 0) {
                            nombres[n + k] = nombres[n];
                            n -= k;
                        }
                        nombres[n + k] = v;
                    }
                }
                k /= 2;
            }
            return nombres;
        }
    
        public static void imprimirNombres(String[] nombres) {
            for (int i = 0; i < nombres.length; i++) {
                System.out.print(nombres[i] + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector Original:");
            imprimirVector(vec);
            System.out.println("\n");
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionShell(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector Ordenado:");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShell(int vec[]) {
            final int N = vec.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        int v = vec[j];
                        int n = j - k;
                        while (n >= 0 && vec[n] > v) {
                            vec[n + k] = vec[n];
                            n -= k;
                        }
                        vec[n + k] = v;
                    }
                }
                k /= 2;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            String[] nombres = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Nombres sin ordenar:");
            imprimirNombres(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionShell(nombres);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Nombres ordenados:");
            imprimirNombres(nombres);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShell(String[] nombres) {
            final int N = nombres.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        String v = nombres[j];
                        int n = j - k;
                        while (n >= 0 && nombres[n].compareTo(v) > 0) {
                            nombres[n + k] = nombres[n];
                            n -= k;
                        }
                        nombres[n + k] = v;
                    }
                }
                k /= 2;
            }
            return nombres;
        }
    
        public static void imprimirNombres(String[] nombres) {
            for (int i = 0; i < nombres.length; i++) {
                System.out.print(nombres[i] + " ");
            }
            System.out.println();
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Vector Original:");
            imprimirVector(vec);
            System.out.println("\n");
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionShell(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            
            System.out.println("\nVector Ordenado:");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShell(int vec[]) {
            final int N = vec.length;
            int k = N / 2;
            while (k >= 1) {
                for (int i = 0; i < k; i++) {
                    for (int j = k + i; j < N; j += k) {
                        int v = vec[j];
                        int n = j - k;
                        while (n >= 0 && vec[n] > v) {
                            vec[n + k] = vec[n];
                            n -= k;
                        }
                        vec[n + k] = v;
                    }
                }
                k /= 2;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println();
        }
    }
    `
]

export const codigosSeleccionDirecta = [
    `
    class Main {
        public static void main(String[] args) {
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
            System.out.println("Vector original: ");
            imprimirVector(vec);
            long startTime = System.currentTimeMillis();
            vec = ordenacionSeleccion(vec, fechas);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
        public static double[] ordenacionSeleccion(double vec[], String[] fechas) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j] < vec[posMenor]) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    double temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
    
                    String aux = fechas[i];
                    fechas[i] = fechas[posMenor];
                    fechas[posMenor] = aux;
                }
            }
            return vec;
        }
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original");
            imprimirVector(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionSeleccion(nombres);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(nombres);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionSeleccion(String vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j].compareTo(vec[posMenor]) < 0) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    String temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original");
            imprimirVector(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionSeleccion(nombres);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(nombres);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionSeleccion(String vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j].compareTo(vec[posMenor]) < 0) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    String temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionSeleccion(vec);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionSeleccion(int vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j] < vec[posMenor]) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    int temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            String[] nombres = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Vector original");
            imprimirVector(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionSeleccion(nombres);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(nombres);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionSeleccion(String vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j].compareTo(vec[posMenor]) < 0) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    String temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionSeleccion(vec);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionSeleccion(int vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j] < vec[posMenor]) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    int temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            String[] nombres = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Vector original");
            imprimirVector(nombres);
    
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionSeleccion(nombres);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(nombres);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionSeleccion(String vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j].compareTo(vec[posMenor]) < 0) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    String temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {
        public static void main(String[] args) {
    
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionSeleccion(vec);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionSeleccion(int vec[]) {
            final int N = vec.length;
            for (int i = 0; i < N; i++) {
                int posMenor = i;
                for (int j = i + 1; j < N; j++) {
                    if (vec[j] < vec[posMenor]) {
                        posMenor = j;
                    }
                }
                if (posMenor != i) {
                    int temp = vec[i];
                    vec[i] = vec[posMenor];
                    vec[posMenor] = temp;
                }
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `
]

export const codigosInsercion = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionInsercion(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static double[] ordenacionInsercion(double vec[], String fechas[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j] < vec[j-1]) { 
                    double temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
    
                    String aux = fechas[j];
                    fechas[j] = fechas[j-1]; 
                    fechas[j-1] = aux; 
    
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector Original:"); 
            imprimirVector(nombres); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionInsercion(nombres); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(nombres); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static String[] ordenacionInsercion(String vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j].compareTo(vec[j-1]) < 0) { 
                    String temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(String vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            String[] nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector Original:"); 
            imprimirVector(nombres); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionInsercion(nombres); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(nombres); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static String[] ordenacionInsercion(String vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j].compareTo(vec[j-1]) < 0) { 
                    String temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(String vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
    
            System.out.println("Vector Original:"); 
            imprimirVector(vec); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionInsercion(vec); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(vec); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static int[] ordenacionInsercion(int vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j] < vec[j-1]) { 
                    int temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(int vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            String[] nombres = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Vector Original:"); 
            imprimirVector(nombres); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionInsercion(nombres); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(nombres); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static String[] ordenacionInsercion(String vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j].compareTo(vec[j-1]) < 0) { 
                    String temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(String vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector Original:"); 
            imprimirVector(vec); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionInsercion(vec); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(vec); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static int[] ordenacionInsercion(int vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j] < vec[j-1]) { 
                    int temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(int vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            String[] nombres = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Vector Original:"); 
            imprimirVector(nombres); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            nombres = ordenacionInsercion(nombres); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(nombres); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static String[] ordenacionInsercion(String vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j].compareTo(vec[j-1]) < 0) { 
                    String temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(String vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `,
    `
    class Main{ 

        public static void main(String[] args) { 
     
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Vector Original:"); 
            imprimirVector(vec); 
            System.out.println("\n"); 
            
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionInsercion(vec); 
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            imprimirVector(vec); 
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("\nMemoria utilizada: " + memory + " bytes\n");
        } 
    
        public static int[] ordenacionInsercion(int vec[]) { 
            final int N = vec.length; 
            for (int i = 1; i < N; i++) { 
                int j = i; 
                while (j > 0 && vec[j] < vec[j-1]) { 
                    int temp = vec[j]; 
                    vec[j] = vec[j-1]; 
                    vec[j-1] = temp; 
                    j--; 
                } 
            } 
            return vec; 
        } 
    
        public static void imprimirVector(int vec[]) { 
            for (int i = 0; i < vec.length; i++) { 
                System.out.print(vec[i] + " "); 
            } 
        } 
    } 
    `
]

export const codigosSnaker = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            vec = ordenacionShaker(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static double[] ordenacionShaker(double vec[], String[] fechas) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior < limiteSuperior) {
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j] < vec[j - 1]) {
                        double temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
        
                        String aux = fechas[j];
                        fechas[j] = fechas[j - 1];
                        fechas[j - 1] = aux;
                    }
                }
                limiteInferior++;
                for (int j = limiteInferior; j < limiteSuperior; j++) {
                    if (vec[j] > vec[j + 1]) {
                        double temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
        
                        String aux = fechas[j];
                        fechas[j] = fechas[j + 1];
                        fechas[j + 1] = aux;
                    }
                }
                limiteSuperior--;
            }
            return vec;
        }
        
    
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            String[] vec = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShaker(String vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j].compareTo(vec[j - 1]) < 0) {
                        String temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
                for (int j = limiteInferior; j < limiteSuperior; j++) {
                    if (vec[j].compareTo(vec[j + 1]) > 0) {
                        String temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            String[] vec = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShaker(String vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j].compareTo(vec[j - 1]) < 0) {
                        String temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
                for (int j = limiteInferior; j < limiteSuperior; j++) {
                    if (vec[j].compareTo(vec[j + 1]) > 0) {
                        String temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShaker(int vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j < limiteInferior; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j] < vec[j - 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            String[] vec = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShaker(String vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j].compareTo(vec[j - 1]) < 0) {
                        String temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
                for (int j = limiteInferior; j < limiteSuperior; j++) {
                    if (vec[j].compareTo(vec[j + 1]) > 0) {
                        String temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShaker(int vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j < limiteInferior; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j] < vec[j - 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            String[] vec = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static String[] ordenacionShaker(String vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j].compareTo(vec[j - 1]) < 0) {
                        String temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
                for (int j = limiteInferior; j < limiteSuperior; j++) {
                    if (vec[j].compareTo(vec[j + 1]) > 0) {
                        String temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
            }
            return vec;
        }
    
        public static void imprimirVector(String vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    }
    `,
    `
    class Main {

        public static void main(String[] args) {
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Vector original");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
            vec = ordenacionShaker(vec);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Vector ordenado");
            imprimirVector(vec);
    
            System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static int[] ordenacionShaker(int vec[]) {
            int limiteInferior = 0;
            int limiteSuperior = vec.length - 1;
            while (limiteInferior <= limiteSuperior) {
                for (int j = limiteSuperior; j < limiteInferior; j++) {
                    if (vec[j] > vec[j + 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j + 1];
                        vec[j + 1] = temp;
                    }
                }
                limiteSuperior--;
                for (int j = limiteSuperior; j > limiteInferior; j--) {
                    if (vec[j] < vec[j - 1]) {
                        int temp = vec[j];
                        vec[j] = vec[j - 1];
                        vec[j - 1] = temp;
                    }
                }
                limiteInferior++;
            }
            return vec;
        }
    
        public static void imprimirVector(int vec[]) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
            System.out.println("\n");
        }
    
    }
    `
]

export const codigosMergeSort = [
    `
    import java.util.*;
    class Main {
    
        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(double[] vec, String[] fechas) {
    
            if (vec.length <= 1)
                return;
        
            int mitad = vec.length / 2;
            double izq[] = Arrays.copyOfRange(vec, 0, mitad);
            double der[] = Arrays.copyOfRange(vec, mitad, vec.length);
        
            String[] izqStr = Arrays.copyOfRange(fechas, 0, mitad);
            String[] derStr = Arrays.copyOfRange(fechas, mitad, fechas.length);
            ordenacionMergeSort(izq, izqStr); 
            ordenacionMergeSort(der, derStr); 
            combinarVector(vec, izq, der, fechas, izqStr, derStr);
        }
        
    
        public static void combinarVector(double[] vec, double[] izq, double[] der, String[] fechas, String[] izqStr, String[] derStr ) {
            int i = 0, j = 0;
            for (int k = 0; k < vec.length; k++) {
                if (i >= izq.length) {
                    vec[k] = der[j];
                    fechas[k] = derStr[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    vec[k] = izq[i];
                    fechas[k] = izqStr[i];
                    i++;
                    continue;
                }
                if (izq[i] < der[j]) {
                    vec[k] = izq[i];
                    fechas[k] = izqStr[i];
                    i++;
                } else {
                    vec[k] = der[j];
                    fechas[k] = derStr[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
            String[] vec = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(String[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            String izq[] = Arrays.copyOfRange(vec, 0, mitad);
            String der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(String[] v, String[] izq, String[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i].compareTo(der[j]) < 0) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(String[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
            String[] vec = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(String[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            String izq[] = Arrays.copyOfRange(vec, 0, mitad);
            String der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(String[] v, String[] izq, String[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i].compareTo(der[j]) < 0) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(String[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
    
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(int[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            int izq[] = Arrays.copyOfRange(vec, 0, mitad);
            int der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(int[] v, int[] izq, int[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i] < der[j]) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(int[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
            String[] vec = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(String[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            String izq[] = Arrays.copyOfRange(vec, 0, mitad);
            String der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(String[] v, String[] izq, String[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i].compareTo(der[j]) < 0) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(String[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
    
            int[] vec = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(int[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            int izq[] = Arrays.copyOfRange(vec, 0, mitad);
            int der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(int[] v, int[] izq, int[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i] < der[j]) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(int[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
            String[] vec = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(String[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            String izq[] = Arrays.copyOfRange(vec, 0, mitad);
            String der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(String[] v, String[] izq, String[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i].compareTo(der[j]) < 0) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(String[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        
        public static void main(String[] args) {
    
            int[] vec = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            ordenacionMergeSort(vec);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void ordenacionMergeSort(int[] vec) {
    
            if (vec.length <= 1)
                return;
    
            int mitad = vec.length / 2;
            int izq[] = Arrays.copyOfRange(vec, 0, mitad);
            int der[] = Arrays.copyOfRange(vec, mitad, vec.length);
            ordenacionMergeSort(izq);
            ordenacionMergeSort(der);
            combinarVector(vec, izq, der);
        }
    
        public static void combinarVector(int[] v, int[] izq, int[] der) {
            int i = 0, j = 0;
            for (int k = 0; k < v.length; k++) {
                if (i >= izq.length) {
                    v[k] = der[j];
                    j++;
                    continue;
                }
                if (j >= der.length) {
                    v[k] = izq[i];
                    i++;
                    continue;
                }
                if (izq[i] < der[j]) {
                    v[k] = izq[i];
                    i++;
                } else {
                    v[k] = der[j];
                    j++;
                }
            }
        }
    
        public static void imprimirVector(int[] vec) {
    
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
    
            }
        }
    }
    `
]

export const codigosRadixSort = [
    `
    import java.util.*;
    class Main {
    
        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            radixSort(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static double encontrarMaximo(double[] arr) {
            double maximo = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > maximo) {
                    maximo = arr[i];
                }
            }
            return maximo;
        }
    
        static void radixSort(double[] arr, String[] fechas) {
            double maximo = encontrarMaximo(arr);
            for (int exp = 1; maximo / exp > 0; exp *= 10) {
                countingSort(arr, exp, fechas);
            }
        }
    
        static void countingSort(double[] arr, int exp, String[] fechas) {
            int n = arr.length;
            double[] output = new double[n];
            String[] fechasOutput = new String[n];
            int[] count = new int[10];
            Arrays.fill(count, 0);
        
            for (int i = 0; i < n; i++) {
                count[(int)((arr[i] / exp) % 10)]++;
            }
        
            for (int i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }
        
            for (int i = n - 1; i >= 0; i--) {
                output[count[(int)((arr[i] / exp) % 10)] - 1] = arr[i];
                fechasOutput[count[(int)((arr[i] / exp) % 10)] - 1] = fechas[i];
                count[(int)((arr[i] / exp) % 10)]--;
            }
    
            System.arraycopy(output, 0, arr, 0, n);
            System.arraycopy(fechasOutput, 0, fechas, 0, n);
        }
        
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    import java.util.*;

    class Main {
        public static void main(String[] args) {
            String[] arr = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
    
            radixSort(arr);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static void radixSort(String[] arr) {
            int longitudMaxima = encontrarLongitudMaxima(arr);
            for (int exp = 1; exp <= longitudMaxima; exp++) {
                countingSort(arr, exp);
            }
        }
    
        static int encontrarLongitudMaxima(String[] arr) {
            int longitudMaxima = arr[0].length();
            for (int i = 1; i < arr.length; i++) {
                if (arr[i].length() > longitudMaxima) {
                    longitudMaxima = arr[i].length();
                }
            }
            return longitudMaxima;
        }
    
        static void countingSort(String[] arr, int exp) {
            int n = arr.length;
            String[] output = new String[n];
            int[] count = new int[256]; // ASCII tiene 256 caracteres
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                if (exp <= arr[i].length()) {
                    count[arr[i].charAt(arr[i].length() - exp)]++;
                } else {
                    count[0]++;
                }
            }
            for (int i = 1; i < 256; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                if (exp <= arr[i].length()) {
                    output[count[arr[i].charAt(arr[i].length() - exp)] - 1] = arr[i];
                    count[arr[i].charAt(arr[i].length() - exp)]--;
                } else {
                    output[count[0] - 1] = arr[i];
                    count[0]--;
                }
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
    }
    `,
    `
    import java.util.*;

    class Main {
        public static void main(String[] args) {
            String[] arr = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
    
            radixSort(arr);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static void radixSort(String[] arr) {
            int longitudMaxima = encontrarLongitudMaxima(arr);
            for (int exp = 1; exp <= longitudMaxima; exp++) {
                countingSort(arr, exp);
            }
        }
    
        static int encontrarLongitudMaxima(String[] arr) {
            int longitudMaxima = arr[0].length();
            for (int i = 1; i < arr.length; i++) {
                if (arr[i].length() > longitudMaxima) {
                    longitudMaxima = arr[i].length();
                }
            }
            return longitudMaxima;
        }
    
        static void countingSort(String[] arr, int exp) {
            int n = arr.length;
            String[] output = new String[n];
            int[] count = new int[256]; // ASCII tiene 256 caracteres
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                if (exp <= arr[i].length()) {
                    count[arr[i].charAt(arr[i].length() - exp)]++;
                } else {
                    count[0]++;
                }
            }
            for (int i = 1; i < 256; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                if (exp <= arr[i].length()) {
                    output[count[arr[i].charAt(arr[i].length() - exp)] - 1] = arr[i];
                    count[arr[i].charAt(arr[i].length() - exp)]--;
                } else {
                    output[count[0] - 1] = arr[i];
                    count[0]--;
                }
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
    }
    
    `,
    `
    import java.util.*;

    class Main {
        static int encontrarMaximo(int[] arr) {
            int maximo = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > maximo) {
                    maximo = arr[i];
                }
            }
            return maximo;
        }
    
        static void radixSort(int[] arr) {
            int maximo = encontrarMaximo(arr);
            for (int exp = 1; maximo / exp > 0; exp *= 10) {
                countingSort(arr, exp);
            }
        }
    
        static void countingSort(int[] arr, int exp) {
            int n = arr.length;
            int[] output = new int[n];
            int[] count = new int[10];
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                count[(arr[i] / exp) % 10]++;
            }
            for (int i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                output[count[(arr[i] / exp) % 10] - 1] = arr[i];
                count[(arr[i] / exp) % 10]--;
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
        public static void main(String[] args) {
            int[] arr = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
            radixSort(arr);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
    }
    `,
    `
    import java.util.*;

    class Main {
        public static void main(String[] args) {
            String[] arr = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
    
            radixSort(arr);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static void radixSort(String[] arr) {
            int longitudMaxima = encontrarLongitudMaxima(arr);
            for (int exp = 1; exp <= longitudMaxima; exp++) {
                countingSort(arr, exp);
            }
        }
    
        static int encontrarLongitudMaxima(String[] arr) {
            int longitudMaxima = arr[0].length();
            for (int i = 1; i < arr.length; i++) {
                if (arr[i].length() > longitudMaxima) {
                    longitudMaxima = arr[i].length();
                }
            }
            return longitudMaxima;
        }
    
        static void countingSort(String[] arr, int exp) {
            int n = arr.length;
            String[] output = new String[n];
            int[] count = new int[256]; // ASCII tiene 256 caracteres
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                if (exp <= arr[i].length()) {
                    count[arr[i].charAt(arr[i].length() - exp)]++;
                } else {
                    count[0]++;
                }
            }
            for (int i = 1; i < 256; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                if (exp <= arr[i].length()) {
                    output[count[arr[i].charAt(arr[i].length() - exp)] - 1] = arr[i];
                    count[arr[i].charAt(arr[i].length() - exp)]--;
                } else {
                    output[count[0] - 1] = arr[i];
                    count[0]--;
                }
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
    }
    `,
    `
    import java.util.*;

    class Main {
        static int encontrarMaximo(int[] arr) {
            int maximo = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > maximo) {
                    maximo = arr[i];
                }
            }
            return maximo;
        }
    
        static void radixSort(int[] arr) {
            int maximo = encontrarMaximo(arr);
            for (int exp = 1; maximo / exp > 0; exp *= 10) {
                countingSort(arr, exp);
            }
        }
    
        static void countingSort(int[] arr, int exp) {
            int n = arr.length;
            int[] output = new int[n];
            int[] count = new int[10];
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                count[(arr[i] / exp) % 10]++;
            }
            for (int i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                output[count[(arr[i] / exp) % 10] - 1] = arr[i];
                count[(arr[i] / exp) % 10]--;
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
        public static void main(String[] args) {
            int[] arr = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
            radixSort(arr);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
    }
    `,
    `
    import java.util.*;

    class Main {
        public static void main(String[] args) {
            String[] arr = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
    
            radixSort(arr);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        static void radixSort(String[] arr) {
            int longitudMaxima = encontrarLongitudMaxima(arr);
            for (int exp = 1; exp <= longitudMaxima; exp++) {
                countingSort(arr, exp);
            }
        }
    
        static int encontrarLongitudMaxima(String[] arr) {
            int longitudMaxima = arr[0].length();
            for (int i = 1; i < arr.length; i++) {
                if (arr[i].length() > longitudMaxima) {
                    longitudMaxima = arr[i].length();
                }
            }
            return longitudMaxima;
        }
    
        static void countingSort(String[] arr, int exp) {
            int n = arr.length;
            String[] output = new String[n];
            int[] count = new int[256]; // ASCII tiene 256 caracteres
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                if (exp <= arr[i].length()) {
                    count[arr[i].charAt(arr[i].length() - exp)]++;
                } else {
                    count[0]++;
                }
            }
            for (int i = 1; i < 256; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                if (exp <= arr[i].length()) {
                    output[count[arr[i].charAt(arr[i].length() - exp)] - 1] = arr[i];
                    count[arr[i].charAt(arr[i].length() - exp)]--;
                } else {
                    output[count[0] - 1] = arr[i];
                    count[0]--;
                }
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
    }
    `,
    `
    import java.util.*;

    class Main {
        static int encontrarMaximo(int[] arr) {
            int maximo = arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > maximo) {
                    maximo = arr[i];
                }
            }
            return maximo;
        }
    
        static void radixSort(int[] arr) {
            int maximo = encontrarMaximo(arr);
            for (int exp = 1; maximo / exp > 0; exp *= 10) {
                countingSort(arr, exp);
            }
        }
    
        static void countingSort(int[] arr, int exp) {
            int n = arr.length;
            int[] output = new int[n];
            int[] count = new int[10];
            Arrays.fill(count, 0);
            for (int i = 0; i < n; i++) {
                count[(arr[i] / exp) % 10]++;
            }
            for (int i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                output[count[(arr[i] / exp) % 10] - 1] = arr[i];
                count[(arr[i] / exp) % 10]--;
            }
            System.arraycopy(output, 0, arr, 0, n);
        }
    
        public static void main(String[] args) {
            int[] arr = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
            
            long startTime = System.currentTimeMillis();
            radixSort(arr);
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
            
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
    }
    `
]

export const codigosHeapSort = [
    `
    class Main {

        public static void main(String[] args) {
    
            double vec[] = {3981.16,3981.16,3981.16,4082.75,4084.11,4042.36,4039.31,4043.46,4043.46,4043.46,4043.46,4011.65,3970.08,3950.40,3993.65,3993.65,3993.65,3993.65,4033.37,4003.95,3980.80,3964.30,3964.30,3964.30,3977.51,3987.32,3947.83,3944.04,3982.60,3982.60,3982.60,3942.73,3923.61,3928.05,3951.96,3962.68,3962.68,3962.68,3963.84,3965.41,3939.31,3917.75,3917.52,3917.52,3917.52,3938.97,3946.88,3963.72,3953.26,3927.25,3927.25,3927.25,3927.25,3932.40,3913.79,3940.20,3910.64,3910.64,3910.64,3910.28,3901.62,3862.95,3771.77,3806.11,3806.11,3806.11,3813.41,3787.18,3746.43,3786.00,3827.64,3827.64,3827.64,3800.85,3836.56,3826.89,3816.43,3820.67,3820.67,3820.67,3820.67,3765.67,3756.64,3798.90,3785.66,3785.66,3785.66,3785.70,3765.96,3748.15,3756.03,3774.79,3774.79,3774.79,3706.95,3723.79,3746.51,3771.83,3777.41,3777.41,3777.41,3744.16,3736.70,3737.32,3737.32,3737.32,3737.32,3737.32,3731.31,3755.85,3758.65,3759.54,3819.07,3819.07,3819.07,3931.74,3947.63,3967.32,3984.77,3966.27,3966.27,3966.27,4004.07,4016.34,4056.41,4086.08,4053.93,4053.93,4053.93,4085.76,4086.71,4080.32,4109.71,4110.53,4110.53,4110.53,4070.25,4033.85,4054.71,4050.88,3989.84,3989.84,3989.84,3950.35,3971.28,3959.05,3930.89,3912.34,3912.34,3912.34,3912.34,3776.52,3791.74,3784.98,3771.63,3771.63,3771.63,3799.50,3790.88,3782.65,3833.34,3912.51,3912.51,3912.51,4016.50,3979.30,3923.96,3912.15,3905.05,3905.05,3905.05,3905.05,4026.92,4026.52,4068.75,4129.87,4129.87,4129.87,4129.87,4089.72,4127.47,4151.21,4198.77,4198.77,4198.77,4198.77,4259.86,4348.68,4369.70,4388.27,4388.27,4388.27,4513.28,4627.46,4558.05,4519.65,4395.63,4395.63,4395.63,4315.41,4303.34,4303.34,4410.14,4423.86,4423.86,4423.86,4461.63,4445.01,4420.75,4375.51,4300.30,4300.30,4300.30,4245.99,4313.30,4331.15,4268.30,4337.28,4337.28,4337.28,4307.09,4309.69,4273.82,4231.45,4185.49,4185.49,4185.49,4185.49,4218.48,4316.47,4413.86,4400.25,4400.25,4400.25,4399.16,4374.45,4380.19,4407.95,4388.02,4388.02,4388.02,4386.13,4400.16,4422.77,4467.03,4466.73,4466.73,4466.73,4466.73,4480.10,4446.36,4396.69,4365.32,4365.32,4365.32,4346.91,4413.89,4389.80,4404.64,4435.84,4435.84,4435.84,4415.11,4420.38,4403.82,4379.80,4426.47,4426.47,4426.47,4496.99,4556.42,4486.94,4532.07,4590.54,4590.54,4590.54,4545.66,4484.74,4548.89,4627.61,4605.29,4605.29,4605.29,4605.29,4611.88,4611.18,4619.78,4636.83,4636.83,4636.83,4636.83,4744.04,4815.09,4885.50,4913.24,4913.24,4913.24,4968.94,4948.14,4895.29,4821.92,4819.42,4819.42,4819.42,4898.74,4975.58,5015.84,5058.02,5061.21,5061.21,5061.21,5061.21,5013.20,4914.71,4806.07,4806.07,4806.07,4806.07,4806.07,4801.06,4922.70,5022.03,4994.61,4994.61,4994.61,4958.42,4914.34,4875.91,4875.91,4881.41,4881.41,4881.41,4840.60,4809.51,4815.59,4779.06,4767.19,4767.19,4767.19,4812.37,4818.32,4825.83,4825.83,4815.99,4815.99,4815.99,4836.24,4791.57,4778.28,4797.02,4802.48,4802.48,4802.48,4781.28,4769.29,4761.64,4760.61,4745.04,4745.04,4745.04,4745.04,4766.82,4765.92,4810.20,4810.20,4810.20,4810.20,4810.20,4842.26,4924.00,4989.58,4885.66,4885.66,4885.66,4885.66,4807.85,4748.54,4692.04,4693.99,4693.99,4693.99,4693.99,4691.09,4702.67,4683.85,4631.64,4631.64,4631.64,4551.02,4545.94,4538.91,4531.75,4548.50,4548.50,4548.50,4632.20,4648.70,4639.04,4584.44,4669.74,4669.74,4669.74,4776.25,4775.99,4769.85,4742.05,4777.73,4777.73,4777.73,4818.62,4783.24,4878.24,4966.33,4918.94,4918.94,4918.94,4918.94,4950.33,4924.91,4853.90,4849.65,4849.65,4849.65,4808.14,4814.11,4848.78,4855.83,4780.89,4780.89,4780.89,4734.42,4744.95,4755.59,4748.61,4748.14,4748.14,4748.14,4769.76,4736.03,4835.51,4866.50,4824.25,4824.25,4824.25,4824.25,4804.29,4776.09,4755.12,4741.76,4741.76,4741.76,4686.83,4658.79,4627.63,4627.27,4646.08,4646.08,4646.08,4603.00,4587.31,4570.91,4570.91,4570.91,4570.91,4570.91,4564.24,4516.76,4458.87,4424.02,4425.27,4425.27,4425.27,4431.45,4473.07,4532.43,4535.78,4523.64,4523.64,4523.64,4482.45,4486.60,4552.59,4654.14,4669.00,4669.00,4669.00,4669.00,4713.08,4667.09,4616.58,4552.56,4552.56,4552.56,4490.58,4540.34,4545.39,4601.15,4564.44,4564.44,4564.44,4506.49,4531.58,4528.30,4521.64,4528.67,4528.67,4528.67,4528.67,4501.81,4448.93,4470.83,4461.66,4461.66,4461.66,4461.66,4408.65,4434.09,4410.49,4355.80,4355.80,4355.80,4307.02,4245.00,4209.14,4179.98,4173.66,4173.66,4173.66,4173.66,4186.30,4182.33,4164.66,4145.72,4145.72,4145.72,4145.72,4149.18,4158.21,4114.39,4168.88,4168.88,4168.88,4172.33,4152.48,4169.60,4191.28,4177.58,4177.58,4177.58,4177.58,4177.58,4128.08,4195.93,4189.96,4189.96,4189.96,4154.06,4193.59,4128.67,4102.13,4089.30,4089.30,4089.30,4069.39,3991.15,3980.20,3980.20,3971.38,3971.38,3971.38,3950.58,3978.83,3951.10,3932.04,3923.49,3923.49,3923.49,3898.48,4007.44,4056.99,4144.79,4077.90,4077.90,4077.90,4077.90,4076.46,4031.65,3955.23,3973.41,3973.41,3973.41,4029.95,4096.08,4130.33,4093.96,4124.04,4124.04,4124.04,4124.04,4120.07,4085.89,4076.90,4117.78,4117.78,4117.78,4111.52,4110.08,4085.33,4099.20,4063.36,4063.36,4063.36,4063.36,4089.46,4093.04,4045.83,4012.26,4012.26,4012.26,3997.74,3993.53,3950.92,3926.59,3928.28,3928.28,3928.28,3905.95,3902.54,3907.21,3948.25,3948.70,3948.70,3948.70,4052.54,4068.73,4093.60,4085.57,4053.76,4053.76,4053.76,4141.43,4187.01,4252.09,4359.40,4386.66,4386.66,4386.66,4386.66,4231.97,4212.50,4230.61,4249.00,4249.00,4249.00,4249.00,4222.09,4227.39,4249.71,4238.85,4238.85,4238.85,4221.39,4213.97,4201.53,4154.94,4120.62,4120.62,4120.62,4060.83,4114.29,4117.71,4047.11,3975.09,3975.09,3975.09,3975.09,4005.06,4065.79,4056.94,4037.19,4037.19,4037.19,4037.19,3963.57,3976.84,4077.44,4116.59,4116.59,4116.59,4033.83,4060.15,4092.33,4092.33,4044.51,4044.51,4044.51,3989.89,3957.77,3980.67,4045.22,3983.15,3983.15,3983.15,3999.91,4023.21,3989.55,3998.51,3998.51,3998.51,3998.51,3982.50,3990.88,3999.43,3955.88,3956.76,3956.76,3956.76,3932.59,3925.77,3948.54,3943.03,3915.43,3915.43,3915.43,3915.43,3871.45,3844.81,3822.05,3822.05,3822.05,3822.05,3822.05,3895.53,3914.60,3927.64,3912.93,3912.93,3912.93,3912.93,3934.13,3946.39,3929.79,3901.38,3901.38,3901.38,3901.38,3940.85,3969.50,3939.89,3916.39,3916.39,3916.39,3904.49,3934.62,3929.95,3932.96,3925.26,3925.26,3925.26,3918.93,3925.60,3915.56,3889.05,3928.11,3928.11,3928.11,3975.74,3950.57,3962.23,3954.68,3926.08,3926.08,3926.08,3915.28,3929.00,3916.61,3909.89,3917.84,3917.84,3917.84,3917.84,3912.97,3930.26,3935.64,3949.36,3949.36,3949.36,3963.08,3935.59,3933.56,3931.31,3934.82,3934.82,3934.82,3948.67,3945.32,3932.55,3920.79,3905.45,3905.45,3905.45,3907.81,3919.86,3908.02,3899.39,3884.64,3884.64,3884.64,3880.59,3894.37,3886.94,3888.02,3901.51,3901.51,3901.51,3901.51,3865.97,3842.30,3842.30,3842.30,3842.30,3842.30,3863.05,3845.22,3812.13,3775.37,3764.23,3764.23,3764.23,3768.80,3763.43,3815.44,3820.10,3864.97,3864.97,3864.97,3889.58,3938.11,3901.94,3918.23,3937.13,3937.13,3937.13};
    
            String[] fechas = { "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022","07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022","14/01/2022", "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022","21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022","28/01/2022", "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022","04/02/2022", "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022","11/02/2022", "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022","18/02/2022", "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022","25/02/2022", "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022","04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022","11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022","18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022","25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022","01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022","08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022","15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022","22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022","29/04/2022", "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022","06/05/2022", "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022","13/05/2022", "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022","20/05/2022", "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022","27/05/2022", "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022","03/06/2022", "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022","10/06/2022", "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022","17/06/2022", "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022","24/06/2022", "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022","01/07/2022", "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022","08/07/2022", "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022","15/07/2022", "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022","22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022","29/07/2022", "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022","05/08/2022", "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022","12/08/2022", "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022","19/08/2022", "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022","26/08/2022", "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022","02/09/2022", "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022","09/09/2022", "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022","16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022","23/09/2022", "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022","30/09/2022", "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022","07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022","14/10/2022", "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022","21/10/2022", "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022","28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022","04/11/2022", "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022","11/11/2022", "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022","18/11/2022", "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022","25/11/2022", "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022","02/12/2022", "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022","09/12/2022", "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022","16/12/2022", "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022","23/12/2022", "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022","30/12/2022", "31/12/2022", "01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023", "05/01/2023","06/01/2023", "07/01/2023", "08/01/2023", "09/01/2023", "10/01/2023", "11/01/2023", "12/01/2023","13/01/2023", "14/01/2023", "15/01/2023", "16/01/2023", "17/01/2023", "18/01/2023", "19/01/2023","20/01/2023", "21/01/2023", "22/01/2023", "23/01/2023", "24/01/2023", "25/01/2023", "26/01/2023","27/01/2023", "28/01/2023", "29/01/2023", "30/01/2023", "31/01/2023", "01/02/2023", "02/02/2023","03/02/2023", "04/02/2023", "05/02/2023", "06/02/2023", "07/02/2023", "08/02/2023", "09/02/2023","10/02/2023", "11/02/2023", "12/02/2023", "13/02/2023", "14/02/2023", "15/02/2023", "16/02/2023","17/02/2023", "18/02/2023", "19/02/2023", "20/02/2023", "21/02/2023", "22/02/2023", "23/02/2023","24/02/2023", "25/02/2023", "26/02/2023", "27/02/2023", "28/02/2023", "01/03/2023", "02/03/2023","03/03/2023", "04/03/2023", "05/03/2023", "06/03/2023", "07/03/2023", "08/03/2023", "09/03/2023","10/03/2023", "11/03/2023", "12/03/2023", "13/03/2023", "14/03/2023", "15/03/2023", "16/03/2023","17/03/2023", "18/03/2023", "19/03/2023", "20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023","24/03/2023", "25/03/2023", "26/03/2023", "27/03/2023", "28/03/2023", "29/03/2023", "30/03/2023","31/03/2023", "01/04/2023", "02/04/2023", "03/04/2023", "04/04/2023", "05/04/2023", "06/04/2023","07/04/2023", "08/04/2023", "09/04/2023", "10/04/2023", "11/04/2023", "12/04/2023", "13/04/2023","14/04/2023", "15/04/2023", "16/04/2023", "17/04/2023", "18/04/2023", "19/04/2023", "20/04/2023","21/04/2023", "22/04/2023", "23/04/2023", "24/04/2023", "25/04/2023", "26/04/2023", "27/04/2023","28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023", "02/05/2023", "03/05/2023", "04/05/2023","05/05/2023", "06/05/2023", "07/05/2023", "08/05/2023", "09/05/2023", "10/05/2023", "11/05/2023","12/05/2023", "13/05/2023", "14/05/2023", "15/05/2023", "16/05/2023", "17/05/2023", "18/05/2023","19/05/2023", "20/05/2023", "21/05/2023", "22/05/2023", "23/05/2023", "24/05/2023", "25/05/2023","26/05/2023", "27/05/2023", "28/05/2023", "29/05/2023", "30/05/2023", "31/05/2023", "01/06/2023","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023","09/06/2023", "10/06/2023", "11/06/2023", "12/06/2023", "13/06/2023", "14/06/2023", "15/06/2023","16/06/2023", "17/06/2023", "18/06/2023", "19/06/2023", "20/06/2023", "21/06/2023", "22/06/2023","23/06/2023", "24/06/2023", "25/06/2023", "26/06/2023", "27/06/2023", "28/06/2023", "29/06/2023","30/06/2023", "01/07/2023", "02/07/2023", "03/07/2023", "04/07/2023", "05/07/2023", "06/07/2023","07/07/2023", "08/07/2023", "09/07/2023", "10/07/2023", "11/07/2023", "12/07/2023", "13/07/2023","14/07/2023", "15/07/2023", "16/07/2023", "17/07/2023", "18/07/2023", "19/07/2023", "20/07/2023","21/07/2023", "22/07/2023", "23/07/2023", "24/07/2023", "25/07/2023", "26/07/2023", "27/07/2023","28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023", "03/08/2023","04/08/2023", "05/08/2023", "06/08/2023", "07/08/2023", "08/08/2023", "09/08/2023", "10/08/2023","11/08/2023", "12/08/2023", "13/08/2023", "14/08/2023", "15/08/2023", "16/08/2023", "17/08/2023","18/08/2023", "19/08/2023", "20/08/2023", "21/08/2023", "22/08/2023", "23/08/2023", "24/08/2023","25/08/2023", "26/08/2023", "27/08/2023", "28/08/2023", "29/08/2023", "30/08/2023", "31/08/2023","01/09/2023", "02/09/2023", "03/09/2023", "04/09/2023", "05/09/2023", "06/09/2023", "07/09/2023","08/09/2023", "09/09/2023", "10/09/2023", "11/09/2023", "12/09/2023", "13/09/2023", "14/09/2023","15/09/2023", "16/09/2023", "17/09/2023", "18/09/2023", "19/09/2023", "20/09/2023", "21/09/2023","22/09/2023", "23/09/2023", "24/09/2023", "25/09/2023", "26/09/2023", "27/09/2023", "28/09/2023","29/09/2023", "30/09/2023", "01/10/2023", "02/10/2023", "03/10/2023", "04/10/2023", "05/10/2023","06/10/2023", "07/10/2023", "08/10/2023", "09/10/2023", "10/10/2023", "11/10/2023", "12/10/2023","13/10/2023", "14/10/2023", "15/10/2023", "16/10/2023", "17/10/2023", "18/10/2023", "19/10/2023","20/10/2023", "21/10/2023", "22/10/2023", "23/10/2023", "24/10/2023", "25/10/2023", "26/10/2023","27/10/2023", "28/10/2023", "29/10/2023", "30/10/2023", "31/10/2023", "01/11/2023", "02/11/2023","03/11/2023", "04/11/2023", "05/11/2023", "06/11/2023", "07/11/2023", "08/11/2023", "09/11/2023","10/11/2023", "11/11/2023", "12/11/2023", "13/11/2023", "14/11/2023", "15/11/2023", "16/11/2023","17/11/2023", "18/11/2023", "19/11/2023", "20/11/2023", "21/11/2023", "22/11/2023", "23/11/2023","24/11/2023", "25/11/2023", "26/11/2023", "27/11/2023", "28/11/2023", "29/11/2023", "30/11/2023","01/12/2023", "02/12/2023", "03/12/2023", "04/12/2023", "05/12/2023", "06/12/2023", "07/12/2023","08/12/2023", "09/12/2023", "10/12/2023", "11/12/2023", "12/12/2023", "13/12/2023", "14/12/2023","15/12/2023", "16/12/2023", "17/12/2023", "18/12/2023", "19/12/2023", "20/12/2023", "21/12/2023","22/12/2023", "23/12/2023", "24/12/2023", "25/12/2023", "26/12/2023", "27/12/2023", "28/12/2023","29/12/2023", "30/12/2023", "31/12/2023", "01/01/2024", "02/01/2024", "03/01/2024", "04/01/2024","05/01/2024", "06/01/2024", "07/01/2024", "08/01/2024", "09/01/2024", "10/01/2024", "11/01/2024","12/01/2024", "13/01/2024", "14/01/2024", "15/01/2024", "16/01/2024", "17/01/2024", "18/01/2024","19/01/2024", "20/01/2024", "21/01/2024", "22/01/2024", "23/01/2024", "24/01/2024", "25/01/2024","26/01/2024", "27/01/2024", "28/01/2024", "29/01/2024", "30/01/2024", "31/01/2024", "01/02/2024","02/02/2024", "03/02/2024", "04/02/2024", "05/02/2024", "06/02/2024", "07/02/2024", "08/02/2024","09/02/2024", "10/02/2024", "11/02/2024", "12/02/2024", "13/02/2024", "14/02/2024", "15/02/2024","16/02/2024", "17/02/2024", "18/02/2024", "19/02/2024", "20/02/2024", "21/02/2024", "22/02/2024","23/02/2024", "24/02/2024", "25/02/2024", "26/02/2024", "27/02/2024", "28/02/2024", "29/02/2024","01/03/2024", "02/03/2024", "03/03/2024", "04/03/2024", "05/03/2024", "06/03/2024", "07/03/2024","08/03/2024", "09/03/2024", "10/03/2024", "11/03/2024", "12/03/2024", "13/03/2024", "14/03/2024","15/03/2024", "16/03/2024", "17/03/2024", "18/03/2024", "19/03/2024", "20/03/2024", "21/03/2024","22/03/2024", "23/03/2024", "24/03/2024", "25/03/2024", "26/03/2024", "27/03/2024", "28/03/2024","29/03/2024", "30/03/2024", "31/03/2024", "01/04/2024", "02/04/2024", "03/04/2024", "04/04/2024","05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024", "09/04/2024", "10/04/2024", "11/04/2024","12/04/2024", "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024", "17/04/2024", "18/04/2024","19/04/2024", "20/04/2024", "21/04/2024", "22/04/2024" };
    
            System.out.println("Vector original: ");
            imprimirVector(vec);
    
            long startTime = System.currentTimeMillis();
    
            heapSort(vec, fechas);
    
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("\nVector ordenado");
            imprimirVector(vec);
    
            System.out.println("\n\nMayor precio: " + vec[vec.length-1] + " en " + fechas[fechas.length-1]);
            System.out.println("\nMenor precio: " + vec[0] + " en " + fechas[0]);
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void heapSort(double[] arr, String[] fechas) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i, fechas);
            }
    
            for (int i = n - 1; i > 0; i--) {
                double temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
    
                String aux = fechas[0];
                fechas[0] = fechas[i];
                fechas[i] = aux;
    
                heapify(arr, i, 0, fechas);
            }
        }
    
        public static void heapify(double[] arr, int n, int i, String[] fechas) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq] > arr[mayor]) {
                mayor = izq;
            }
            if (der < n && arr[der] > arr[mayor]) {
                mayor = der;
            }
            if (mayor != i) {
                double swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
    
                String aux = fechas[i];
                fechas[i] = fechas[mayor];
                fechas[mayor] = aux;
    
                heapify(arr, n, mayor, fechas);
            }
        }
    
        public static void imprimirVector(double[] vec) {
            for (int i = 0; i < vec.length; i++) {
                System.out.print(vec[i] + " ");
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            String[] arr = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void heapSort(String[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                String temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(String[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq].compareTo(arr[mayor]) > 0) {
                mayor = izq;
            }
            if (der < n && arr[der].compareTo(arr[mayor]) > 0) {
                mayor = der;
            }
            if (mayor != i) {
                String swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            String[] arr = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",     "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
            System.out.println(arr.length);
    
        }
    
        public static void heapSort(String[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                String temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(String[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq].compareTo(arr[mayor]) > 0) {
                mayor = izq;
            }
            if (der < n && arr[der].compareTo(arr[mayor]) > 0) {
                mayor = der;
            }
            if (mayor != i) {
                String swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            int[] arr = { 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074,1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034,1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075,1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099,1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105,1104 };
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void heapSort(int[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                int temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(int[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq] > arr[mayor]) {
                mayor = izq;
            }
            if (der < n && arr[der] > arr[mayor]) {
                mayor = der;
            }
            if (mayor != i) {
                int swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            String[] arr = {"Victoria", "Víctor", "Valentina", "Sofía", "Sofía", "Sergio", "Samuel", "Sara", "Sara", "Sara", "Sara", "Rubén", "Rubén", "Ricardo", "Raúl", "Raúl", "Pedro", "Patricia", "Pablo", "Pablo",     "Natalia", "Natalia", "Miguel", "María", "María", "María", "María", "Martina", "Martina", "Martina", "Marta", "Marta", "Marta", "Luis", "Luis", "Lucía", "Lucía", "Lucía", "Laura", "Laura", "Laura", "Laura", "Juan", "José", "José", "Jorge", "Jesús", "Javier", "Javier", "Iván", "Isabel", "Guillermo", "Gonzalo", "Gabriel", "Francisco", "Francisco", "Fernando", "Fernando", "Elena", "Elena", "Diego", "Diego", "Cristina", "Cristina", "Claudia", "Claudia", "Carmen", "Carmen", "Carlos", "Carlos", "Camila", "Camila", "Beatriz", "Beatriz", "Antonio", "Andrés", "Andrea", "Andrea", "Ana", "Alba", "Alejandro", "Alberto", "Adrián"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
            System.out.println(arr.length);
    
        }
    
        public static void heapSort(String[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                String temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(String[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq].compareTo(arr[mayor]) > 0) {
                mayor = izq;
            }
            if (der < n && arr[der].compareTo(arr[mayor]) > 0) {
                mayor = der;
            }
            if (mayor != i) {
                String swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            int[] arr = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void heapSort(int[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                int temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(int[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq] > arr[mayor]) {
                mayor = izq;
            }
            if (der < n && arr[der] > arr[mayor]) {
                mayor = der;
            }
            if (mayor != i) {
                int swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            String[] arr = {"Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando",    "Sofía", "Martina", "Lucía", "Natalia", "Andrea", "Laura", "Carlos", "Ana", "Jesús", "Alejandro",    "Valentina", "Pedro", "Isabel", "Gabriel", "María", "Sara", "Gonzalo", "Marta", "Ricardo", "José",    "Lucía", "Adrián", "Samuel", "Diego", "Cristina", "Alberto", "Sara", "Pablo", "Laura", "Cristina",    "Claudia", "Marta", "Fernando", "Alba", "Victoria", "Laura", "Guillermo", "Sara", "Antonio", "Rubén",    "María", "Javier", "Beatriz", "Laura", "Francisco", "Ricardo", "Andrés", "Víctor", "Ricardo", "Jorge",    "Javier", "Patricia", "Natalia", "Carmen", "Alejandro", "Beatriz", "Laura", "Laura", "Laura", "Pablo",    "Martina", "Ricardo", "Ricardo", "Javier", "Sara", "Diego", "Laura", "Adrián", "Lucía", "María", "Laura",    "Laura", "Alberto", "Laura", "Sara", "Francisco", "Andrea", "Pablo", "Lucía", "Andrea", "Lucía", "Laura",    "Carmen", "Sergio", "José", "Carlos", "María", "Laura", "Javier", "Laura", "Ricardo", "Andrea", "María",    "Alberto", "Laura", "Fernando"};
    
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
            System.out.println(arr.length);
    
        }
    
        public static void heapSort(String[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                String temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(String[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq].compareTo(arr[mayor]) > 0) {
                mayor = izq;
            }
            if (der < n && arr[der].compareTo(arr[mayor]) > 0) {
                mayor = der;
            }
            if (mayor != i) {
                String swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `,
    `
    import java.util.Arrays;

    class HeapSort {
        public static void main(String[] args) {
            int[] arr = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};
            
            System.out.println("Arreglo original: " + Arrays.toString(arr));
    
            long startTime = System.currentTimeMillis();
    
            heapSort(arr);
            
            long endTime = System.currentTimeMillis();
            long executionTime = endTime - startTime;
            Runtime runtime = Runtime.getRuntime();
            long memory = runtime.totalMemory() - runtime.freeMemory();
    
            System.out.println("Arreglo ordenado: " + Arrays.toString(arr));
    
            System.out.println("\n\nTiempo de ejecución: " + executionTime + " milisegundos");
            System.out.println("Memoria utilizada: " + memory + " bytes");
        }
    
        public static void heapSort(int[] arr) {
            int n = arr.length;
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            for (int i = n - 1; i > 0; i--) {
                int temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
                heapify(arr, i, 0);
            }
        }
    
        public static void heapify(int[] arr, int n, int i) {
            int mayor = i;
            int izq = 2 * i + 1;
            int der = 2 * i + 2;
            if (izq < n && arr[izq] > arr[mayor]) {
                mayor = izq;
            }
            if (der < n && arr[der] > arr[mayor]) {
                mayor = der;
            }
            if (mayor != i) {
                int swap = arr[i];
                arr[i] = arr[mayor];
                arr[mayor] = swap;
                heapify(arr, n, mayor);
            }
        }
    }
    `
]