<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'surname' => $this->surname,
            'nickname' => $this->nickname,
            'avatar' => asset('storage/'. $this->avatar),
            'email' => $this->email,
            'role_name' => $this->roles[0]->alias_name,
//            'notifications_count' => $this->notifications_count,
//            'read_notifications_count' => $this->read_notifications_count,
//            'unread_notifications_count' => $this->unread_notifications_count,
        ];
    }
}
