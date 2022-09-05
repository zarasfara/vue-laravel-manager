<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    protected $redirectRoute = 'home';
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
     * Получить пользовательские имена атрибутов для формирования ошибок валидатора.
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
            'email' => ['email', 'required'],
            'password' => ['required', 'min:6'],
        ];
    }

    public function messages()
    {
        return [
            'email' => [
                'required' => ':attribute обязателен',
                'email' => ':attribute некорректный',
            ],
            'password' => [
                'min:6' => ':attribute должен быть минимум 6 символов',
                'required' => ':attribute обязателен',
            ],
        ];
    }
}
