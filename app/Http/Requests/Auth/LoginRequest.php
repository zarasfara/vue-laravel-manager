<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
//    protected $redirectRoute = 'home';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get common attribute names to form an error validator.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'email' => 'Почта',
            'password' => 'Пароль',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => ['email', 'required','exists:users'],
            'password' => ['required', 'min:6'],
        ];
    }

    /**
     * Validation messages
     *
     * @return string[]
     */
    public function messages()
    {
        return [

            'email.required' => ':attribute обязательна',
            'email.email' => ':attribute некорректная',
            'email.exists' => 'Такой почты не существует',

            'password.min' => ':attribute должен быть минимум 6 символов',
            'password.required' => ':attribute обязателен',

        ];
    }
}
