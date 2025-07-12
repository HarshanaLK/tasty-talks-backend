<?php

namespace App\Http\Traits;

use App\Enums\LotteryTypesEnum;
use Carbon\Carbon;
use Illuminate\Support\Arr;

trait UtilityTrait
{
    /**
     * Method enumToArray
     *
     * @param  mixed  $enum  [explicite description]
     */
    public function enumToArray($enum): array
    {

        return Arr::map($enum, fn ($enum) => $enum->value);
    }

    /**
     * Method enumToSelect
     *
     * @param  mixed  $enum  [explicite description]
     */
    public function enumToSelect($enum): array
    {
        $arr = [];
        foreach ($this->enumToArray($enum) as $key => $value) {
            $arr[] = ['value' => $value, 'label' => ucwords($value)];
        }

        return $arr;
    }

    /**
     * arrayRandomElement
     *
     * @param  mixed  $array
     */
    public function arrayRandomElement(array $array): mixed
    {
        return $array[array_rand($array)];
    }

    /**
     * makeSerialNumber
     *
     * @param  mixed $date
     * @param  mixed $type
     * @return void
     */
    public function makeLotterySerialNumber($date, $type): string
    {
        $code = "";
        switch ($type) {
            case LotteryTypesEnum::DoubleFifty:
                $code = "DF";
                break;
            case LotteryTypesEnum::Super3x:
                $code = "S3X";
                break;
        }
        return $code . Carbon::parse($date)->format('Ymd');
    }
}
