Feature: Registro de Empleados

    Background: xd
    Given admin is logged in
    And se encuentra en el dashboard

    Scenario: Registro exitoso de un empleado
        Given me encuentro en la sección de Registro de Empleados
        When ingreso los siguientes datos del nuevo empleado
        | Campo                | Valor                          |
        | First Name           | John                           |
        | Middle Name          | Peralta                        |
        | Last Name            | Mendoza                        |
    Then veo un mensaje de éxito que indica que el registro se realizó correctamente
    And los datos del empleado registrado coinciden con los datos ingresados