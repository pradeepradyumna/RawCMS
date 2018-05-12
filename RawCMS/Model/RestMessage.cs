﻿using RawCMS.Library.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RawCMS.Model
{

    public enum RestStatus
    {
        OK,
        KO,
        CompletedWithErrors
    }


   

    public class RestMessage<T>
    {
        public List<Error> Errors { get; set; } = new List<Error>();
        public List<Error> Warnings { get; set; } = new List<Error>();
        public List<Error> Infos { get; set; } = new List<Error>();

        public RestStatus Status { get; set; }

        public T Data { get; set; }

        public RestMessage(T item)
        {
            this.Data = item;
        }

    }
}
